import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {setS3Config} from "../utils/ConfigureAmplify";
import RecipeService from "../services/RecipeService";
import PropTypes from 'prop-types';
import Recipe from "../models/Recipe";
import {Button} from "primereact/button";

export default function BlogPostCardMain(props) {

    const {recipe, link} = props;
    const [s3Link, sets3Link] = useState([]);

    setS3Config('cookit-app-data', "public")

    useEffect(() => {
        new RecipeService().loadRecipeImageFromStorage(recipe.image).then(data => {
            sets3Link({
                fileUrl: data
            })
        });
    }, [recipe])

    const header = <img alt="Last Recipe" style={{borderRadius: '3px'}} src={s3Link.fileUrl} />;

    const buttonClass = "p-as-stretch p-text-bold p-py-2 p-button-text p-p-1 p-pt-5"

    const handleOnClick = (() => history.push("/recipesDetail/" + recipe.id));

    const card = {
        width: "600px"
    }

    const button = {
        fontSize: '24px',
        flexGrow: 0
    }

    const history = useHistory();

    return (
        <React.Fragment>
            <div className="p-card p-component p-d-flex p-p-1">
                <div className="p-card-header p-component p-d-flex">
                    {header}
                </div>
                <div style={card} className="p-d-inline-flex-flex p-p-3">
                    {link === true &&
                    <Button style={button} className={buttonClass}
                            onClick={handleOnClick}>{recipe.name}</Button>
                    }
                    {link === false &&
                        <text style={button} className={buttonClass}>
                        {recipe.name}
                        </text>
                    }
                    <div className="p-card-body">{recipe.description}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

BlogPostCardMain.propTypes = {
    recipe: PropTypes.instanceOf(Recipe.class),
    link: PropTypes.bool
};