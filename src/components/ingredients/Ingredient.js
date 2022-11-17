const Ingredient = ({ ingredient, addIngredient }) => {
  const uri = "https://xm-crm-react-exercise-server.herokuapp.com/img/";
  return (
    <>
      <div className="ingredient" onClick={() => addIngredient(ingredient.id)}>
        <img src={`${uri}${ingredient.src}`} alt="" />
      </div>
      <div className="ingredient__title">{ingredient.name}</div>
    </>
  );
};

export default Ingredient;
