import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import BlogPostCard from '../components/BlogPostCard';
import Footer from '../components/Footer';
import BlogPostCardMain from "../components/BlogPostCardMain";
import RecipeService from "../services/RecipeService";
import {TabMenu} from "primereact/tabmenu";

const mainPanel = {
    width: '1200px',
    align: 'center',
    margin: 'auto'
}

export default function Blog() {

    const [recipe, setRecipe] = useState([]);
    const [featureRecipes, setFeatureRecipes] = useState([]);


    useEffect(() => {
        new RecipeService().loadLastRecipes(setRecipe, setFeatureRecipes);
    }, [])


    const items = [
        {label: 'Recepty', icon: 'pi pi-book', url: '/recipes'},
    ];

    return (
        <React.Fragment>
            <div style={mainPanel}>
                <Header/>
                <TabMenu model={items}/>

                <div className="p-d-flex p-flex-column p-pt-2">
                    <BlogPostCardMain recipe={recipe} link={true}/>
                    <div className="p-d-flex p-pt-2">
                        {featureRecipes.map((post) => (
                            <div className="p-p-1">
                                <BlogPostCard key={post.title} id={post.id} recipe={post} link={true}/>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <Footer title="Cookit" />
        </React.Fragment>
    );
}