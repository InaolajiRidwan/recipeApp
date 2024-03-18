import "./App.css";
import { Recipe } from "./components/Recipe";
import RecipeNav from "./components/RecipeNav";
import { useState } from "react";

function App() {
  const [categorical, setCategorical] = useState("chicken");
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <RecipeNav setCategorical={setCategorical} setSearch={setSearch} />
      <Recipe categorical={categorical} search={search} />
    </div>
  );
}

export default App;
