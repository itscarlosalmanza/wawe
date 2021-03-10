import React from "react";
import { Card, Image, Button } from "semantic-ui-react"

function CardData({title, image, ingredients, instructions}) {
    return (
      <div class="ui card">
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
            <div class="ui bottom attached button">
      <i class="add icon"></i>
      Add to Favorites
    </div>
      </div>
    );
  }
  export default CardData;
