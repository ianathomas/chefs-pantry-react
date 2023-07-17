import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { MyPantryItemsIndex } from "./MyPantryItemsIndex";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [myPantryItems, setMyPantryItems] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get(`http://localhost:3000/ingredients.json?search_terms=${searchTerm}`).then((response) => {
      console.log(response.data);
      setIngredients(response.data.results);
    });
  };

  const handleIndexMyPantryItems = () => {
    console.log("handleIndexMyPantryItems");
    axios.get("http://localhost:3000/my_pantry_items.json").then((response) => {
      console.log(response.data);
      setMyPantryItems(response.data);
    });
  };

  // useEffect(handleIndexIngredients, []);

  useEffect(handleIndexMyPantryItems, [ingredients]);

  return (
    <div className="container">
      <div className="search-container">
        Search Ingredients:{" "}
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button onClick={handleIndexIngredients}>Search</button>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/ingredients" element={<IngredientsIndex ingredients={ingredients} />} /> */}
        <Route
          path="/"
          element={<IngredientsIndex ingredients={ingredients} handleIndexMyPantryItems={handleIndexMyPantryItems} />}
        />
        <Route path="/my_pantry_items" element={<MyPantryItemsIndex myPantryItems={myPantryItems} />} />
      </Routes>
    </div>
  );
}
