import axios from "axios";
import { useState } from "react";
import { IngredientsIndex } from "./IngredientsIndex";

export function SearchBar() {
  const handleIndexIngredients = () => {};

  return (
    <div>
      Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      {searchTerm}
      <button onClick={handleIndexIngredients}>Search</button>
      <IngredientsIndex ingredients={ingredients} />
    </div>
  );
}
