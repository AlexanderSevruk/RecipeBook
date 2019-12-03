import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import NewRecipeForm from "./RecipeForm";
import GroupedButtons from "./BottomNav";

const Navbar = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="navbar">
      <h1>Recipe Book</h1>
      <GroupedButtons />
      <p>
        You can find your saved recipes in the Archive. Currently you have{" "}
        {recipes.length}{" "}
        {recipes.length >= 2 || recipes.length === 0 ? "recipes" : "recipe"}{" "}
        saved
      </p>
      <NewRecipeForm />
    </div>
  );
};

export default Navbar;
