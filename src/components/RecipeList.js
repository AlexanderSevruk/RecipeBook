import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import RecipeDetails from "./RecipeDetails";
import BottomNav from "./BottomNav";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  return recipes.length ? (
    <div className="recipe-list">
      <ul>
        {recipes.map(recipe => {
          return <RecipeDetails recipe={recipe} key={recipe.id} />;
        })}
      </ul>
      <div className="BottomNav">
        <BottomNav />
      </div>
    </div>
  ) : (
    <div className="empty">
      No saved recipes
      <BottomNav />
    </div>
  );
};

export default RecipeList;
