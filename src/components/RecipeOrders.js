import React from "react";
import PropTypes from "prop-types";


export default function RecipeOrders(props) {


    const {recipeItems} = props;

    const parentHeightPropagation = {
        height: '100%'
    }

    return (

        <div className="p-panel p-component p-d-inline-flex p-flex-column" style={{height: 'auto'}}>
            <div className="p-panel-header">
                <span id="header_1" className="p-panel-title">Postup přípravy</span>
                <div className="p-panel-icons"/>
            </div>
            <div style={parentHeightPropagation} className="p-toggleable-content" aria-hidden="false" role="region" aria-labelledby="header_1">
                <div  style={parentHeightPropagation} className="p-panel-content">
                    {recipeItems.map((item) => (
                        <div  className="p-d-inline-flex p-ai-start p-p-2">
                            <text className="p-mr-2 p-text-bold"> {item.order + ". "}</text>
                            <text className="p-ml-2"> {item.text} </text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
RecipeOrders.propTypes = {
    recipeItems: PropTypes.array,
};