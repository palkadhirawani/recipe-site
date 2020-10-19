import React, { useState } from 'react';
import './App.css';
import SearchPage from './SearchPage.js';
import './SearchPage.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import IndRecipePage from './IndRecipePage.js'
import Rec from './Rec.js'

const App = () => {

    const [rec, setRec] = useState([]);

    return (
        <Router>
            <div className="App">
                <SearchPage rec={rec} setRec={setRec} />
                <Switch>
                    <Route path="/recipe-site" component={HomePage}/>
                    <Route path="/search" exact>
                        <Rec rec={rec} setRec={setRec} />
                    </Route>
                    <Route path="/search/:id" component={IndRecipePage}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;
