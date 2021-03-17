import React from "react";
import { StyledNav } from "./styles";
import "semantic-ui-css/semantic.min.css";

const Nav = () => {
    return (
        <div class="ui visible right vertical labeled icon menu thin sidebar">
        <a class="active item" id="test">
          <i class="home icon"></i>Home</a>
        <a class="item" id="test">
          <i class="book icon"></i>Recipes</a>
        <a class="item" id="test">
          <i class="heart icon"></i>Favorites</a>
        </div>
    );
};

export default Nav;
