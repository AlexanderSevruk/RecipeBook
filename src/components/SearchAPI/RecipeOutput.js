import React from "react";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className="recipes">
      <h2>{title}</h2>

      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <p>calories : {calories}</p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View full recipe
        </a>
      </p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
