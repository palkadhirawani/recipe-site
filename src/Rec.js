import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList.js';
import './RecipeList.css';
import more1 from './images/more1.png';
import more2 from './images/more2.png';

const Rec = ({rec, setRec}) => {

    return (
        <div>
            <div className="beaut">
                {rec.map(recipe => (
                    <RecipeList 
                        key={recipe._id}
                        title={recipe.title}
                        image={recipe.image_url}
                        rec_id={recipe.recipe_id}
                    />
                ))}
            </div>
            <div className="blog">
                <h1>READ OUR BLOG</h1>
                <div className="blog-grid">
                    <img className="blog-img" src={more1}></img>
                    <img className="blog-img" src={more2}></img>
                    <img className="blog-img" src={more1}></img>
                    <img className="blog-img" src={more2}></img>
                    <img className="blog-img blog-img5" src={more1}></img>
                    <img className="blog-img" src={more2}></img>
                </div>
            </div>
        </div>
    );
}

export default Rec;