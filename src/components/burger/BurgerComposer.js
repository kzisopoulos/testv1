const BurgerComposer = ({ ingredients, removeIngredient }) => {
  const uri = "https://xm-crm-react-exercise-server.herokuapp.com/img/";
  const topBun =
    "https://xm-crm-react-exercise-server.herokuapp.com/img/bun_top.png";
  const bottomBun =
    "https://xm-crm-react-exercise-server.herokuapp.com/img/bun_bottom.png";

  return (
    <div className="burger__composer">
      <h2 className="burger__composer-title">Stack your burger</h2>
      <img src={topBun} alt="top bun" className="top__bun" />
      <div className="burger__composer_image-stack">
        {ingredients.map((ing, index) => (
          <div
            className="burger__composer_image-container"
            key={index}
            style={{ marginBottom: `-${40}px`, zIndex: -index }}
          >
            <img
              src={`${uri}${ing.src}`}
              alt={ing.name}
              className="ingredient__image"
              onClick={() => removeIngredient(ing.id)}
            />
          </div>
        ))}
      </div>
      <img src={bottomBun} alt="bottom bun" className="bottom__bun" />
    </div>
  );
};

export default BurgerComposer;
