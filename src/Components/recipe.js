import React, { useContext } from "react";
import IngredientList from "./ingredientList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { handleDeleteRecipe } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  return (
    <>
      <div className="recipe">
        <div className="recipe-header">
          <h3 className="recipe-title">{name}</h3>
          <div>
            <button className="btn btn-primary mr-1">Edit</button>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteRecipe(id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="recipe_row">
          <span className="recipe_label">Cook Time:</span>
          <span className="recipe_value">{cookTime}</span>
        </div>
        <div className="recipe_row">
          <span className="recipe_label">Servings:</span>
          <span className="recipe_value">{servings}</span>
        </div>
        <div className="recipe_row">
          <span className="recipe_label">Instructions:</span>
          <div className="recipe_value recipe_instructions recipe_value--indented">
            {instructions}
          </div>
        </div>
        <div>
          <span className="recipe_label">Ingredients:</span>
          <div className=" recipe_value recipe_value--indented">
            <IngredientList ingredients={ingredients} />
          </div>
        </div>
      </div>
    </>
  );
}
