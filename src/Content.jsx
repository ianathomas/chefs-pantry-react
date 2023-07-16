import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { MyPantryItemsIndex } from "./MyPantryItemsIndex";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [myPantryItems, setMyPantryItems] = useState([]);
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

  useEffect(handleIndexMyPantryItems, []);

  return (
    <div>
      <div>
        Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        {searchTerm}
        <button onClick={handleIndexIngredients}>Search</button>
      </div>
      <IngredientsIndex ingredients={ingredients} />
      <MyPantryItemsIndex myPantryItems={myPantryItems} />
    </div>
  );
}
