import axios from "axios";
import Recipe from "../models/Recipe"
import Storage from "@aws-amplify/storage";
import {setS3Config} from "../utils/ConfigureAmplify";

const api = axios.create({
    baseURL: `https://ab6ae6m8u5.execute-api.eu-central-1.amazonaws.com/Prod/`,
    responseType: 'json'
})

export default class RecipeService {

    async getRecipeById(id) {
        try {
            let response = await api.get("/recipes/full/" + id);
            if (response.status === 200) {
                const jsonRecipe = response.data;
                return new Recipe(jsonRecipe);
            }
        } catch (error) {
            console.log("Error on load recipes data from database. ", error)
        }
    }

    async loadRecipeImageFromStorage(imagePath) {
        setS3Config('cookit-app-data', "public")
        if (imagePath != null) {
            return Storage.get(imagePath).then(data => {
                return data
            }).catch(err => {
                console.log('S3 error!', err)
            });
        }
    }

    async fetchMyAPI(path) {

        setS3Config('cookit-app-data', "public");

        await Storage.get(path.path).then(imageStoragePath => {
                return {path: imageStoragePath}
            }
        ).catch(err => {
            console.log('S3 error!', err)
        });
    }

    async loadRecipeImagesFromBucket(recipe) {
        return await Promise.all(
            recipe.images.map(async image => {
                return await this.fetchMyAPI(image)
            })
        )
    }

    async loadLastRecipes(setRecipe, setFeatureRecipes){


            api.get("/recipes/last/" + 5)
                .then(response => {

                    const recipes = response.data;

                    let i;
                    let posts = [];
                    for (i = 0; i < recipes.length; i++) {
                        if (i === 0) {
                            const recipe = new Recipe(recipes[i])
                            setRecipe(recipe)
                        } else {
                            const recipe = recipes[i];
                            posts.push(new Recipe(recipe));
                        }
                    }
                    setFeatureRecipes(posts);
                })
                .catch(error => {
                    console.log("Error on load recipes recipe from database.", error)
                })

    }
    async loadRecipeDetailContent(id, setData, setIngredients, setOrders) {

        try{
            let recipe = await this.getRecipeById(id);
            if (recipe != null) {
                setData(recipe);
                if(recipe.items != null){
                    setIngredients(recipe.items);
                }if(recipe.orders != null){
                    setOrders(recipe.orders);
                }
            }
        }catch (error) {
            console.log("Error on create content of recipe.", error);
        }
    }

    async loadRecipeList(setData){
        try{
            let response = await api.get("/recipes");
            let recipes = [];
            response.data.forEach(function(entry) {
                recipes.push(new Recipe(entry));
            });
            setData(recipes);
        }
        catch (error) {
            console.log("Error on load data from database.", error);
        }
    }
}