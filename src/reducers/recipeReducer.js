import uuid from "uuid/v1";

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          title: action.recipe.title,
          ingredient: action.recipe.ingredient,
          direction: action.recipe.direction,
          id: uuid()
        }
      ];
    case "REMOVE_RECIPE":
      return state.filter(recipe => recipe.id !== action.id);
    default:
      return state;
  }
};
