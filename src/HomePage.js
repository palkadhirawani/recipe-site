import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import more1 from './images/more1.png';
import more2 from './images/more2.png';

const HomePage = () => {

    const [top, setTop] = useState([]);

    useEffect(() => {
        topRecipes();
    }, []);

    const topRecipes = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search`); 
        const data = await response.json();
        setTop(data.recipes);
        console.log(data.recipes);
    }

    
    return (
        <div>
            <div className="main-content">

                <div className="main-left">
                    <h2>TOP RATED RECIPES</h2>
                    <div className="top5rec">
                        {top.slice(0, 5).map((toprec) => (
                            <Link to={`/search/${toprec.recipe_id}`}>
                                <div className="eachrec">
                                    <img src={toprec.image_url}></img>
                                    <p>{toprec.title}</p>
                                </div>
                            </Link> 
                        ))}
                    </div>

                    <div id="categories">
                        <h2>CHOOSE ACCORDING TO</h2>
                        <div className="category">
                            <p>CUISINE</p>
                            <i></i>
                            <hr/>
                        </div>
                        <div className="category">
                            <p>INGREDIENTS</p>
                            <i></i>
                            <hr/>
                        </div>
                        <div className="category">
                            <p>TYPE OF COURSE</p>
                            <i></i>
                            <hr/>
                        </div>
                        <div className="category">
                            <p>HEALTHY RECIPES</p>
                            <i></i>
                            <hr/>
                        </div>
                        <div className="category">
                            <p>QUICK RECIPES</p>
                            <i></i>
                            <hr/>
                        </div>

                    </div>
                </div>

                <div className="main-right">
                    <h2>OUR BLOG</h2>
                    <img src={more1}></img>
                    <img src={more2}></img>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
