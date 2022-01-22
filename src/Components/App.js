import React, { useState } from "react";
import RecipeList from "./recipeList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();
function App() {
  const [recipes, setRecipies] = useState(sampleRecipes);

  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
  };

  function handleAddRecipe() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr",
      ingredients: [
        {
          id: uuidv4(),
          quantity: "1 gm",
        },
      ],
    };
    setRecipies([...recipes, newRecipe]);
  }
  function handleDeleteRecipe(id) {
    setRecipies(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Pasta",
    servings: 3,
    cookTime: "1:30",
    instructions: "1. Open pasta packet\n2. Cook pasta\n3. Eat",
    ingredients: [
      {
        id: 1,
        name: "Pasta",
        quantity: "100gms",
      },
      {
        id: 2,
        name: "Salt",
        quantity: "2gms",
      },
    ],
  },
  {
    id: 2,
    name: "Noodles",
    servings: 1,
    cookTime: "0:45",
    instructions: "1. Open noodles packet\n2. Cook noodles\n3. Eat",
    ingredients: [
      {
        id: 1,
        name: "Noodles",
        quantity: "150gms",
      },
      {
        id: 2,
        name: "Salt",
        quantity: "20gms",
      },
    ],
  },
];

export default App;
