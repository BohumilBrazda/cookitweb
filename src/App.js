import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage'
import Blog from './pages/Blog'

import React from 'react';

export default function App() {

    return (
        <Router>
            <Switch>
                <Route path={"/recipes"}>
                    <RecipeListPage/>
                </Route>
                <Route path={"/recipesDetail/:id"} component={RecipeDetailPage}/>
                <Route path={"/"}>
                    <Blog/>
                </Route>
            </Switch>
        </Router>
    )

}
