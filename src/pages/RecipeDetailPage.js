import React, {useEffect, useState} from "react";
import Header from "../components/Header";

import Ingredients from "../components/RecipeIngredients";
import RecipeOrderList from "../components/RecipeOrders";
import BlogPostCardMain from "../components/BlogPostCardMain";
import Footer from "../components/Footer";

import RecipeService from "../services/RecipeService";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import 'primeflex/primeflex.css';
import {TabMenu} from "primereact/tabmenu";

export default function RecipeDetailPage(props) {

    const id = props.match.params.id;

    const [data, setData] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [orders, setOrders] = useState([]);


    const mainPanel = {
        width: '1200px',
        align: 'center',
        margin: 'auto'
    }

    useEffect(() => {
        new RecipeService().loadRecipeDetailContent(id, setData, setIngredients, setOrders);
    }, [id])

    const items = [
        {label: 'Hlavní stránka', icon: 'pi pi-home', url: '/'},
        {label: 'Recepty', icon: 'pi pi-book', url: '/recipes'}
    ];


    return (
        <React.Fragment>
            <div style={mainPanel}>
                <Header/>
                <div className="p-pb-2">
                    <TabMenu model={items} />
                </div>

                <div className="p-d-flex p-flex-column">
                    <BlogPostCardMain className="p-d-inline-flex p-flex-column p-pt-2" recipe={data} link={false}/>
                    <div className="p-d-flex p-pt-3">
                        <Ingredients recipeItems={ingredients}/>
                        <div className="p-p-2"/>
                        <RecipeOrderList recipeItems={orders}/>
                    </div>
                </div>
                <Footer title="Cookit" />
            </div>

        </React.Fragment>

    );
}