import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import db from './db/db.json';
import CardData from './components/CardData'


function App() {
  return (
    <div className="App">
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

<div class="ui card">
  <div class="image">
    <img src="/images/avatar2/large/kristy.png">
  </img>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
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
