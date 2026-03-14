import "./App.css";
import { useReducer } from "react";

function App() {
  /*
  useReducer hook is similer to useState, but instead of providing state and setter function. It provides state and dispatch function, which is used to update the state. It takes a reducer function and an initial state as arguments. The reducer function takes the current state and an action as arguments and returns the new state. The dispatch function is used to dispatch an action to the reducer function. The action is an object that has a type property and a payload property. The type property is used to identify the action and the payload property is used to pass data to the reducer function.
*/

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + 1 };
      case "DECREASE":
        return { count: state.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button 
        className="paddingBtn"
        onClick={() => {
          return dispatch({ type: "INCREASE" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          return dispatch({ type: "DECREASE" });
        }}
      >
        Decrease
      </button>

      <br />
      
      <input
        type="number"
        value={state.count}
        onChange={(event) => {
          return dispatch({
            type: "input",
            payload: parseInt(event.target.value) || 0,
          });
        }}
      />
    </>
  );
}

export default App;
