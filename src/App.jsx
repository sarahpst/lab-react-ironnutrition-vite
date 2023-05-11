import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodState, setFoodState] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm setFoodState={setFoodState} foodState={foodState} />

      <Button> Hide Form / Add New Food </Button>

      <Search setFoodState={setFoodState} foods={foodState}></Search>

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodState.map((item, index) => {
          return (
            <FoodBox
              key={index}
              food={item}
              foodState={foodState}
              setFoodState={setFoodState}
            />
          );
        })}
      </Row>
    </div>
  );
}

//Foods : initial ne peut pas etre modifié
// FoodState : Search / Add / Delete
//Quand je cherche, je me base sur foods.

export default App;
