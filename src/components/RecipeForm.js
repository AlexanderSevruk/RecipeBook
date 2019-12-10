import React, { useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import IconLabelButtons from "./AddRecipeButton";
import { TextField } from "@material-ui/core";

const NewRecipeForm = () => {
  const { dispatch } = useContext(RecipeContext);
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [direction, setDirection] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_RECIPE", recipe: { title, ingredient, direction } });
    setTitle("");
    setIngredient("");
    setDirection("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        style={{ margin: "12px 0" }}
        id="standard-basic"
        color="primary"
        fullWidth
        label="Recipe title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <TextField
        style={{ margin: "12px 0" }}
        id="standard-basic"
        color="primary"
        fullWidth
        multiline
        label="Ingredients"
        value={ingredient}
        onChange={e => setIngredient(e.target.value)}
        required
      />
      <TextField
        style={{ margin: "12px 0" }}
        label="Directions(optional)"
        id="standard-multiline-flexible"
        multiline
        fullWidth
        value={direction}
        onChange={e => setDirection(e.target.value)}
      />

      <IconLabelButtons>Add</IconLabelButtons>
    </form>
  );
};

export default NewRecipeForm;
