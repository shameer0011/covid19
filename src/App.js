
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import India from './components/India';
import World from './components/World';
import Statedata from './components/statedata';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Router>
                        <Header />

                        <Switch>
                            <Route exact path="/"><India /></Route>
                            <Route exact path="/world"><World /></Route>
                            <Route exact path="/statedata"><Statedata /></Route>
                        </Switch>

                    </Router>
                </div>
            </div>
        )
    }
}
