import React from 'react';
import { useReducer } from 'react/cjs/react.development';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'ZERO':
      return { value: (state.value = 0) };
    default:
      return state;
  }
}

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>현재값은 {state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'ZERO' })}>0</button>
    </div>
  );
};

export default UseReducerCounter;
