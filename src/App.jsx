import { useState, useEffect } from "react";
import "./App.css";
import ReceipeCard from './components/ReceipeCard';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';


const App = () => {
  

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);





  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
}




  
  // console.log(receipe);
  return (
    <div className="container">
      <div className="h-container">
        
        <SearchBar handleSubmit={handleSubmit} onChange={(e) => {
          setQuery(e.target.value);
          isLoading={isLoading}
        }} />
      </div>
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <ReceipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Results found."}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
