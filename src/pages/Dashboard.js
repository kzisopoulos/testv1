import { useState } from "react";
import BurgerComposer from "../components/burger/BurgerComposer";
import IngredientList from "../components/ingredients/IngredientList";
import { useFetch } from "../hooks/useFetch";

const Dashboard = () => {
  const [selectedIng, setSelectedIng] = useState([]);
  const { error, isLoading, data } = useFetch();

  // methods
  const addIngredient = (id) => {
    const ing = {
      id: new Date().getTime(),
      name: data[id - 1].name,
      src: data[id - 1].src,
    };
    setSelectedIng((prev) => [ing, ...prev]);
  };
  const removeIngredient = (id) => {
    setSelectedIng((prev) => prev.filter((ing) => ing.id !== id));
  };
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return "There was an error fetching data";
  }
  return (
    <div className="container container-create">
      {data && (
        <main className="main">
          <IngredientList ingredients={data} addIngredient={addIngredient} />

          <BurgerComposer
            ingredients={selectedIng}
            removeIngredient={removeIngredient}
          />
        </main>
      )}
    </div>
  );
};

export default Dashboard;
