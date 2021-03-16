import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import db from "./db/db.json";
import CardData from "./components/layout/CardData";
import backgroundImg from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Profile from "./components/layout/Profile";

// const App = () => {
//   return (
//     <div className="App" style={{ backgroundImage: backgroundImg }}>
//       <div class="ui visible right vertical labeled icon menu thin sidebar">
//         <a class="active item" id="test">
//           <i class="home icon"></i>Home</a>
//         <a class="item" id="test">
//           <i class="book icon"></i>Recipes</a>
//         <a class="item" id="test">
//           <i class="heart icon"></i>Favorites</a>
//       </div>
//       <div className="RecipeCard">
//         {db.map((db) => (
//           <CardData
//             key={db.id}
//             title={db.title}
//             image={db.image}
//             ingredients={db.ingredients}
//             instructions={db.instructions}
//           />
//         ))}
//       </div>
//     </div>


const App = () => {
    return (
        <Router>
            <div className="App">
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