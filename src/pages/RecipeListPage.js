import React, {useEffect, useState} from "react";
import RecipeService from "../services/RecipeService";

import {DataView} from 'primereact/dataview';
import BlogPostCard from "../components/BlogPostCard";
import Header from "../components/Header";
import {TabMenu} from "primereact/tabmenu";
import Footer from "../components/Footer";

import './RecipeTable.css';


export default function RecipeListPage() {


    const [data, setData] = useState([]); //table data

    useEffect(() => {
        new RecipeService().loadRecipeList(setData);
    }, [])

    const mainPanel = {
        width: '1200px',
        align: 'center',
        margin: 'auto'

    }

    const items = [
        {label: 'Hlavní stránka', icon: 'pi pi-home', url: '/'}
    ];

    const renderListItem = (data) => {
        console.log("recept v tabulce " + data.toString());
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item">
                    <BlogPostCard className="product-grid-item-content" id={data.id} recipe={data} link={true}/>
                </div>
            </div>
        );
   }

    return (
        <React.Fragment>
            <div style={mainPanel}>
                <Header/>
                <TabMenu model={items}/>
                <div className="recipe-list">
                    <div className="card">
                        <DataView value={data} layout={'grid'} itemTemplate={renderListItem}/>
                    </div>

                </div>
                <Footer/>
            </div>
        </React.Fragment>
    );
}