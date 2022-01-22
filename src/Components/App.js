import RecipeList from "./recipeList";
import "../css/app.css";

function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
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
