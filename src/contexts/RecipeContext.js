import React, { createContext, useReducer, useEffect } from "react";
import { recipeReducer } from "../reducers/recipeReducer";

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [recipes, dispatch] = useReducer(recipeReducer, [], () => {
    const localData = localStorage.getItem("recipes");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, dispatch }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
