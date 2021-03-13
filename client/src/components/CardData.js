import React from "react";
import { Card, Image, Button } from "semantic-ui-react"

function CardData({title, image, ingredients, instructions}) {
  return (
    <div class="ui 1 column grid">
      <div class="column">
      <div class="ui fluid card">
        <div class="image">
                <img src={image}></img>
          <div class="content">
                    <a class="header">{title}</a>
            <div class="meta">
                        <span class="instructions">{instructions}</span>
            </div>
            <div class="ingredients">
                        {ingredients}
            </div>
          </div>
            </div>
             <div class="ui labeled button" tabindex="0">
  <div class="ui red button">
    <i class="heart icon"></i>  Add to Favorites
  </div>
  <div class="ui right floated animated fade button" tabindex="0">
  <div class="visible content">New Recipe</div>
  <div class="hidden content">
    Click Me
  </div>
</div>
</div>
       {/* <div class="ui bottom attached button">
      <i class="add icon"></i>
      Add to Favorites
    </div> */} 
    {/* removed favorite button to replace with red favs button -AR */}
        </div>
      </div>
    </div>
    );
  }
  export default CardData;
