import React, { useEffect, useState } from 'react';
import SearchPage from './SearchPage.js';
import './IndRecipePage.css'

const IndRecipePage = ({ match }) => {

    const [ingredients, setIngredients] = useState({
        title: "",
        ingredients: [],
        image_url: ""
    });

    useEffect(() => {
        IndRecipes();
        console.log(match);
    }, []);

    const IndRecipes = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${match.params.id}`); 
        const data = await response.json();
        setIngredients(data.recipe);
        console.log(data.recipe);
    };
    
    return (
        <div>
            <SearchPage />
            
                <div className="fullrec">
                    <h1>{ingredients.title}</h1>
                    <div className="individual-rec">
                        <div className="prod-images">
                            <img className="item item1" src={ingredients.image_url}></img>
                            <img className="item item2" src={ingredients.image_url}></img>
                            <img className="item item3" src={ingredients.image_url}></img>
                            <img className="item item4" src={ingredients.image_url}></img>
                            <img className="item item5" src={ingredients.image_url}></img>
                        </div>
                        <div className="random">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nibh, maximus in auctor a, egestas in est. Sed mollis porttitor fermentum. Fusce bibendum arcu non tellus vehicula molestie. Fusce pretium dolor non sodales ullamcorper. Maecenas vestibulum ultrices leo, in molestie ante varius quis. Suspendisse in turpis eleifend, rhoncus nisi a, elementum risus. Aenean pellentesque est eu euismod aliquam. Nunc malesuada elementum tempor.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nibh, maximus in auctor a, egestas in est. Sed mollis porttitor fermentum. Fusce bibendum arcu non tellus vehicula molestie. Fusce pretium dolor non sodales ullamcorper. Maecenas vestibulum ultrices leo, in molestie ante varius quis. Suspendisse in turpis eleifend, rhoncus nisi a, elementum risus. Aenean pellentesque est eu euismod aliquam. Nunc malesuada elementum tempor.
                        </div>
                        <hr />
                        <div className="details">
                            <div className="ingredients">
                                <h2>INGREDIENTS</h2>
                                <ul>
                                    {ingredients.ingredients.map(ing => ( 
                                        <li>{ing}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="directions">
                                <h2>DIRECTIONS</h2>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nibh, maximus in auctor a, egestas in est. Sed mollis porttitor fermentum. Fusce bibendum arcu non tellus vehicula molestie. Fusce pretium dolor non sodales ullamcorper. Maecenas vestibulum ultrices leo, in molestie ante varius quis. Suspendisse in turpis eleifend, rhoncus nisi a, elementum risus. Aenean pellentesque est eu euismod aliquam. Nunc malesuada elementum tempor.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default IndRecipePage;