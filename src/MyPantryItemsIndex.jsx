import axios from "axios";

export function MyPantryItemsIndex(props) {
  const destroyPantryItem = (id) => {
    axios.delete(`http://localhost:3000/my_pantry_items/${id}.json`).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };
  return (
    <div>
      <h2>My Pantry!</h2>
      {props.myPantryItems.map((myPantryItem) => (
        <div key={myPantryItem.id}>
          {console.log(myPantryItem)}
          <h2>{myPantryItem.name}</h2>
          <p>Ingredient: {myPantryItem.ingredient.name}</p>
          <p>Amount: {myPantryItem.amount}</p>
          <button
            onClick={() => {
              destroyPantryItem(myPantryItem.id);
            }}
          >
            Delete
          </button>
          {/* <form onSubmit={destroyPantryItem}>
            <input type="hidden" name="id" defaultValue={myPantryItem.id}></input>
            <p>amount to delete</p> <input type="text" name="amount"></input>
            <button type="submit">Delete from Pantry</button>
          </form> */}
          {/* <img src={myPantryItem.url} /> */}
          {/* <p>Type: {myPantryItem.ingredient.ingredient_type}</p> */}
        </div>
      ))}
    </div>
  );
}
