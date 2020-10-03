import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './RecipeList.js';
import SearchPage from './SearchPage.js';
import './SearchPage.css'

const IndRecipePage = () => {
    
    return (
        <div>
            <SearchPage />
            <h1>CHICKEN SALAD</h1>
            <div className="individual-rec">
                <div className="prod-images">
                    <img></img>
                </div>
                <div className="random">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nibh, maximus in auctor a, egestas in est. Sed mollis porttitor fermentum. Fusce bibendum arcu non tellus vehicula molestie. Fusce pretium dolor non sodales ullamcorper. Maecenas vestibulum ultrices leo, in molestie ante varius quis. Suspendisse in turpis eleifend, rhoncus nisi a, elementum risus. Aenean pellentesque est eu euismod aliquam. Nunc malesuada elementum tempor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nibh, maximus in auctor a, egestas in est. Sed mollis porttitor fermentum. Fusce bibendum arcu non tellus vehicula molestie. Fusce pretium dolor non sodales ullamcorper. Maecenas vestibulum ultrices leo, in molestie ante varius quis. Suspendisse in turpis eleifend, rhoncus nisi a, elementum risus. Aenean pellentesque est eu euismod aliquam. Nunc malesuada elementum tempor.
                </div>
                <br />
                <br />
                <hr />
                <div className="details">
                    <div className="ingredients">
                        <h2>INGREDIENTS</h2>
                        <ul>
                            <li>{}</li>
                        </ul>
                    </div>
                    <div className="directions">
                        <h2>DIRECTIONS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndRecipePage;