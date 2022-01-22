import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit-crossbtn-container">
        <button className="btn recipe-edit-remove-btn">&times;</button>
      </div>
      <div className="recipe-edit-detailsgrid">
        <label htmlFor="name" className="recipe-edit-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit-input"
        />
        <label htmlFor="cookTime" className="recipe-edit-label">
          Cook Time
        </label>
        <input
          type="text"
          name="name"
          id="cookTime"
          className="recipe-edit-input"
        />
        <label htmlFor="servings" className="recipe-edit-label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="name"
          id="servings"
          className="recipe-edit-input"
        />
        <label htmlFor="instructions" className="recipe-edit-label">
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          className="recipe-edit-input"
        />
      </div>
      <br />
      <label className="recipe-edit-label">Ingredients</label>
      <div className="recipe-edit-ingredient-grid">
        <div>Name</div>
        <div>Quantity</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div className="recipe-edit-add-ingredients-btn-container">
        <button className="btn btn-primary">Add Ingredients</button>
      </div>
    </div>
  );
}
