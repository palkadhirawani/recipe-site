import React from "react";

const RecipeList = ({title, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="recipe"></img>
        </div>
    );
};

export default RecipeList;