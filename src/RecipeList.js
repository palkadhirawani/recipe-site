import React from "react";
import {Link} from 'react-router-dom';

const RecipeList = ({title, image}) => {
    
    return(
        <Link to='/recipe'>
            <div>
                <h1>{title}</h1>
                <img src={image} alt="recipe"></img>
            </div>
        </Link>
    );
};

export default RecipeList;