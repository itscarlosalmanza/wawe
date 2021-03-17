import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Profile from "./components/layout/Profile";
import Nav from "./components/layout/Nav";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import db from "./db/db.json";
import CardData from "./components/layout/CardData";
import backgroundImg from "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";




const App = () => {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </div>
        </Router>
    );
};

export default App;
