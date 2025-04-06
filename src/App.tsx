import { useEffect, useReducer } from "react";
import { Header, Guitar } from "./components";

import { cartReducer, initialState } from "./reducers/cart.reducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <>
      <Header cart={state.cart} dispatch={dispatch} />
      <main className="mt-5 container-xl">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="mt-5 row">
          {state.data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>

      <footer className="py-5 mt-5 bg-dark">
        <div className="container-xl">
          <p className="mt-4 text-center text-white fs-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
