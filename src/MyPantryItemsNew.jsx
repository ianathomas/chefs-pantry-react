import { useNavigate } from "react-router-dom";

export function MyPantryItemsNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreateMyPantryItem(params);
    event.target.reset();
    navigate("/");
  };

  <div id="myPantryItems-new">
    <h1>New Pantry Item</h1>
    <form onSubmit={handleSubmit}>
      <div>Name: {props.ingredient.name}</div>
      <div>Amount: {props.ingredient.amount}</div>
      <button type="submit">Create Pantry Item</button>
    </form>
  </div>;
}
