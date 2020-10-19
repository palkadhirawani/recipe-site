import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList.js';

const Rec = ({rec, setRec}) => {

    return (
        <div>
            {rec.map(recipe => (
                <RecipeList 
                    key={recipe._id}
                    title={recipe.title}
                    image={recipe.image_url}
                    rec_id={recipe.recipe_id}
                />
            ))}
        </div>
    );
}

export default Rec;