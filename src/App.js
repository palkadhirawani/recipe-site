import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './RecipeList.js';
import SearchPage from './SearchPage.js';
import './SearchPage.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import IndRecipePage from './IndRecipePage.js'
import Rec from './Rec.js'

const App = () => {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/recipe-site" component={HomePage}/>
                    <Route path="/search" exact component={Rec}/>
                    <Route path="/search/:id" component={IndRecipePage}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;
