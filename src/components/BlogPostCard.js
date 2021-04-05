import React, {useCallback, useEffect, useState} from 'react';
import Storage from '@aws-amplify/storage';
import PropTypes from 'prop-types';
import {setS3Config} from "../utils/ConfigureAmplify";
import {useHistory} from "react-router-dom";
import {Button} from "primereact/button";

export default function BlogPostCard(props) {

    const {id, recipe} = props;
    const date = new Date(recipe.created).toLocaleDateString()
    const [s3Link, sets3Link] = useState([]);
    const history = useHistory();

    const handleOnClick = useCallback(() => history.push("/recipesDetail/" + id), [history, id]);

    const header = <img alt="recipe" style={{borderRadius: '3px'}} src={s3Link.fileUrl}/>;

    const card = {
        height: '100%',
        minWidth: '200px'
    }

    const maxHeight = {
         height: '100%'
    }


    setS3Config('cookit-app-data', "public")

    useEffect(() => {
        Storage.get(recipe.image).then(data => {
            sets3Link({
                fileUrl: data
            })
        }).catch(err => {
            console.log('S3 error!',err)
        })

    }, [recipe.image])

    return (
        <React.Fragment>
            <div style={card} className="p-card p-d-flex p-flex-column p-p-1 p-jc-start">
                <div className="p-card-header">
                    {header}
                </div>
                <div style={maxHeight} className="p-d-inline-flex p-flex-column p-p-0 p-jc-start">
                    <div className="p-as-end  p-pb-1 p-pr-1">{date}</div>
                    <Button style={{fontSize: '19px', flexGrow: 0}} className="p-as-stretch p-text-bold p-button-text p-p-1"
                            onClick={handleOnClick}>{recipe.name}</Button>
                    <div className="p-pl-2">
                        <p style={{lineHeight: '1.6'}}>{recipe.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

BlogPostCard.propTypes = {
    post: PropTypes.object,
    id: PropTypes.string
};