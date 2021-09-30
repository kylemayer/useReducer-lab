/* eslint-disable max-len */
import React, { useReducer } from 'react';

const initialValue = {
  current: '#FF0000',
  before: [],
  after: [],
};

const recordReducer = (state, action) => {
  const { current, before, after } = state;

  switch (action.type) {
    case 'record':
      return {
        ...state,
        before: [...before, current],
        current: payloard,
      };
    // const record = (val) => {
    //   setBefore(before => [...before, current]);
    //   setCurrent(val);
    // };
    case 'undo':
      return {
        //   setAfter(after => [current, ...after]);
        //   setCurrent(before[before.length - 1]);
        //   setBefore(before => before.slice(0, -1));
        // };
      };

      // const redo = () => {
      //   setBefore(before => [...before, current]);
      //   setCurrent(after[0]);
      //   setAfter(after => after.slice(1));
      // };

    default:
      return new Error(`Invalid action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(recordReducer, initialValue);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      >
        undo
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      >
        redo
      </button>
      <input
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
        aria-label="color-picker"
      />
      <div
        style={{ backgroundColor: current, height: '50px', width: '50px' }}
      ></div>
    </>
  );
}

export default App;
