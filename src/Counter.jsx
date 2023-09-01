import React, { useReducer } from 'react';

// Step 1: Define a reducer function
// The reducer takes two arguments: the current state and an action.
// It returns a new state based on the action type.
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

// Step 2: Create your component and use useReducer
function Counter() {
  // useReducer returns the current state and a dispatch function.
  // The first argument is the reducer function, and the second argument is the initial state.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Counter;
