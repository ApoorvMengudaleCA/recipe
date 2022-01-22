import React from "react";
import Recipe from "./recipe";

export default function recipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list-btn-container">
        <button className="btn btn-primary">Add Recipe</button>
      </div>
    </div>
  );
}
