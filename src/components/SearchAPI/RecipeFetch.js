import React, { useEffect, useState } from "react";
import BottomNav from "../BottomNav";
import RecipeOutput from "./RecipeOutput";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "./Search.css";

const Search = () => {
  const APP_ID = "6bb717cb";
  const APP_KEY = "83f22d27bb00b6d3afebeeca94d8da7a";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Pasta");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="search-page">
      <div className="BottomNav">
        <BottomNav />
      </div>
      <div className="search">
        <InputBase
          className="input"
          placeholder="Search field"
          inputProps={{ "aria-label": "search google maps" }}
          value={search}
          onChange={updateSearch}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon onClick={getSearch} />
        </IconButton>
      </div>

      <div className="recipes">
        {recipes.map(recipe => (
          <div className="recipe_output">
            <RecipeOutput
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={Math.floor(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
