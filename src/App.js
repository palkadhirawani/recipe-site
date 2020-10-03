import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './RecipeList.js';
import SearchPage from './SearchPage.js';
import './SearchPage.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import IndRecipePage from './IndRecipePage.js'

const App = () => {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/recipe" component={IndRecipePage}/>
                    <Route path="/search" component={RecipeList}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;
