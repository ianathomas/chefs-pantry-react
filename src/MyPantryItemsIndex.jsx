export function MyPantryItemsIndex(props) {
  return (
    <div>
      <h1>My Pantry!</h1>
      {props.myPantryItems.map((myPantryItem) => (
        <div key={myPantryItem.id}>
          <h2>{myPantryItem.name}</h2>
          <img src={myPantryItem.url} />
          <p>Name: {myPantryItem.ingredient.name}</p>
          <p>Type: {myPantryItem.ingredient.ingredient_type}</p>
          <p>Amount: {myPantryItem.amount}</p>
        </div>
      ))}
    </div>
  );
}
