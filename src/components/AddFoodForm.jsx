import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddFoodForm({ setFoodState, foodState }) {
  const [name, setName] = useState("");
  const [image, setImg] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const create = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    const updateFoods = [...foodState, newFood];
    setFoodState(updateFoods);
  };

  return (
    <form onSubmit={create}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label>Image</label>
      <Input
        type="text"
        value={image}
        onChange={(event) => {
          setImg(event.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        type="number"
        value={calories}
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        type="number"
        value={servings}
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
