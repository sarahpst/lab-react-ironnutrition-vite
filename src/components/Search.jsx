import { Divider, Input } from "antd";
import { useState } from "react";

// Iteration 5
function Search({ setFoodState, foods }) {
  const [search, setSearch] = useState("");

  const foodFilter = (event) => {
    const word = event.target.value.toLowerCase();
    setSearch(word);
    const foodsSearch = foods.filter((food) => {
      return food.name.toLowerCase().indexOf(word) !== -1;
    });
    setFoodState(foodsSearch);
  };
  
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={search} type="text" onChange={foodFilter} />
    </>
  );
}

export default Search;
