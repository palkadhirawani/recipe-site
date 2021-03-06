import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

const SearchPage = ({rec, setRec}) => {

    let history = useHistory();
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(); 
    //we're creating this query constant because with only the search constant, the useEffect runs everytime you write something in the search bar, which in turn calls the api that many times. This is not good because there's a limit to how many times you can even call an external api and your code will show errors

    useEffect(() => {
        getRecipes();
    }, [query]);
    //declaring the second parameter as an empty array so that the useEffect hook runs only once
    //**UPDATE** query is passed here so that the useEffect hook only runs when query is changed.

    const getRecipes = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${query}`); 
        //writing await because we have to wait till the data from the api is fetched.
        const data = await response.json();
        setRec(data.recipes);
        console.log(data.recipes);
    }

    const searchedItem = event => {
        setSearch(event.target.value);
    }

    const getSearch = event => {
        event.preventDefault(); 
        //this prevents the page from getting refreshed everytime you submit the form because that's the default action
        setQuery(search);
        setSearch('');
        history.push(`/search`)
    }

    return (
        <div className="home-page">

            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600;700;800;900&display=swap" rel="stylesheet">

            </link>
            <nav>
                <h3>AllRecipes</h3>
                <ul>
                    <Link to="/recipe-site">
                    <li>Home</li>
                    </Link>
                    <li> <a href="#categories">Categories</a> </li>
                    <li>Blog</li>
                </ul>
            </nav>
            <div className="landing-page">
                <div className="heading">
                    <h1>Discover new recipes</h1>
                    <form className="search-form" onSubmit={getSearch}>
                        <input className="search-bar" type="text" value={search} onChange={searchedItem} placeholder="Search"></input>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SearchPage;
