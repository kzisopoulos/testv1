import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients, addIngredient }) => {
  return (
    <div className="ingredients">
      <h3 className="ingredients__title">Our ingredient bucket list</h3>
      <div className="ingredients__subtitle">pick as many as you'd like!</div>
      <ul className="ingredient__list">
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <Ingredient ingredient={ingredient} addIngredient={addIngredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
