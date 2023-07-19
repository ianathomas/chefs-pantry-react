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
        window.location.reload();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  return (
    <div>
      <h2>Available Ingredients</h2>
      <div className="float-container">
        <div className="float-child1">
          <h3>"Chefs dont make mistakes; </h3>
          <h3>they make new dishes."</h3>
          <p> - Elizabeth Brigg</p>
        </div>
        <div className="float-child2"></div>
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
            <img src={ingredient.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
