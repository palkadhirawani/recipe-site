import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList.js';
import SearchPage from './SearchPage.js';

function Rec () {

    const [rec, setRec] = useState([]);

    return (
        <div>
            <SearchPage rec={rec} setRec={setRec}/>
            {rec.map(recipe => (
                <RecipeList 
                    key={recipe._id}
                    title={recipe.title}
                    image={recipe.image_url}
                    rec_id={recipe.recipe_id}
                    rec={rec}
                />
            ))}
        </div>
    );
}

export default Rec;