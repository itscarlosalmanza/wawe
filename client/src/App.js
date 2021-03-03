import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import db from './db/db.json';
import CardData from './components/CardData'


function App() {
  return (
    <div className="App">
      <h1>What are we eating?</h1>
      <div class="ui orange inverted segment">
  <div class="ui inverted secondary pointing menu">
    <a class="active item">
      Home
    </a>
    <a class="item">
      Recipes
    </a>
    <a class="item">
      Favorites
    </a>
  </div>
</div>

{db.map(db => (
<CardData
  key={db.id}
  title={db.title}
  image={db.image}
  ingredients={db.ingredients}
  instructions={db.instructions}
  />

))}

    </div>

    
  );
}


export default App;
