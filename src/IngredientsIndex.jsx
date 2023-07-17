import { MyPantryItemsNew } from "./MyPantryItemsNew";
import axios from "axios";

export function IngredientsIndex(props) {
  const addPantryItem = (event) => {
    event.preventDefault();
    console.log("working");
    const params = new FormData(event.target);
    axios
      .post(`http://localhost:3000/my_pantry_items.json`, params)
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
    props.handleIndexMyPantryItems();
  };
  return (
    <div>
      <h2>Available Ingredients</h2>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          {console.log(ingredient)}
          <form onSubmit={addPantryItem}>
            <input type="hidden" name="name" defaultValue={ingredient.name}></input>
            <p>amount</p> <input type="text" name="amount"></input>
            <input type="hidden" name="api_id" defaultValue={ingredient.id}></input>
            <p>image</p> <input type="text" name="image_url"></input>
            <button type="submit">Add to Pantry</button>
          </form>
          {/* <button className="info-button" onClick={MyPantryItemsNew}>
            Add to Pantry
          </button> */}
          <img src={ingredient.url} />
        </div>
      ))}
    </div>
  );
}

// import { Content } from "./Content";

// export function IngredientsIndex(props) {
//   return (
//     <div>
//       <Content ingredients={ingredients}></Content>
//       <div>
//         Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
//         {searchTerm}
//         <button onClick={handleIndexIngredients}>Search</button>
//       </div>
//       <h1>Search Ingredients</h1>
//       {props.ingredients.map((ingredient) => (
//         <div key={ingredient.id}>
//           <h2>{ingredient.name}</h2>
//           <img src={ingredient.url} />
//         </div>
//       ))}
//     </div>
//   );
// }
