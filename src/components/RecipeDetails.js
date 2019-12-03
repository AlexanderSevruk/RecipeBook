import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const RecipeDetails = ({ recipe }) => {
  const { dispatch } = useContext(RecipeContext);
  return (
    <li>
      <div className="title">{recipe.title}</div>
      <br />
      <div className="ingredient">Ingredients: {recipe.ingredient}</div>
      <br />
      <div className="direction">Direction: {recipe.direction}</div>
      <br />
      <Button
        onClick={() => dispatch({ type: "REMOVE_RECIPE", id: recipe.id })}
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
};

export default RecipeDetails;
