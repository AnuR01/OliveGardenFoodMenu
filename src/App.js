import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import RecipeMenu from "./components/RecipeMenu";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
   searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="about">
      <h1>Restuarant Olive's Garden</h1>
      <h2> Your own multi cuisine restaurant!</h2>
      <h3> Search for your favorite dish in search box and place an order!</h3>
      <h3>Also get know more about recipe of your favorite dish!</h3>
      

      <SearchBox
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      
      <div className="dishes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeMenu
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "Sorry! We don't have the dish and recipe you were looking for! :( "}
      </div>
    </div>
  );
}
export default App;