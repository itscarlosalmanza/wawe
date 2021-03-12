import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import db from "./db/db.json";
import CardData from "./components/CardData";
import backgroundImg from "./assets/background.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: backgroundImg }}>
      {/* <h1>What are we eating?</h1> */}

        <div class="ui visible right vertical labeled icon menu thin sidebar">
        <a class="active item" id="test">
          <i class="home icon"></i>Home</a>
        <a class="item" id="test">
          <i class="book icon"></i>Recipes</a>
        <a class="item" id="test">
          <i class="heart icon"></i>Favorites</a>
        </div>
      <div className="RecipeCard">
      {db.map((db) => (
        <CardData
          key={db.id}
          title={db.title}
          image={db.image}
          ingredients={db.ingredients}
          instructions={db.instructions}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
