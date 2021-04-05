import React from 'react';
import PropTypes from "prop-types";


export default function RecipeIngredients(props) {

    const {recipeItems} = props;

    const ingredientPanel = {
        minWidth: '25%',
        height: 'auto',

    }
    const parentHeightPropagation = {
        height: '100%'
    }

    return (
        <React.Fragment>
            <div className="p-panel p-component p-d-inline-flex p-flex-column" style={ingredientPanel}>
                <div className="p-panel-header">
                    <span id="header_1" className="p-panel-title">Suroviny</span>
                    <div className="p-panel-icons"/>
                </div>
                <div style={parentHeightPropagation} className="p-toggleable-content" aria-hidden="false" role="region" aria-labelledby="header_1">
                    <div  style={parentHeightPropagation} className="p-panel-content">
                        {recipeItems.map((item) => (
                            <div  className="p-d-flex p-ai-start p-p-2">
                                <div className="p-mr-2"> {item.quantity}{item.unit} </div>
                                <div className="p-mr-2"> {item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
RecipeIngredients.propTypes = {
    recipeItems: PropTypes.array,
};