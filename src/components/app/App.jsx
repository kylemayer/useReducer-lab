import React, { useReducer } from 'react';

const initialValue = {
  before: [],
  current: '#FF0000',
  after: [],
};

const recordReducer = (state, { type, payload }) => {
  const { current, before, after } = state;

  switch (type) {
    case 'record':
      return {
        ...state,
        before: [...before, current],
        current: payload,
      };
    // const record = (val) => {
    //   setBefore(before => [...before, current]);
    //   setCurrent(val);

    case 'undo':
      return {
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1),
      };
    //   setAfter(after => [current, ...after]);
    //   setCurrent(before[before.length - 1]);
    //   setBefore(before => before.slice(0, -1));

    case 'redo':
      return {
        before: [...before, current],
        current: after[0],
        after: after.slice(1),
      };
    //   setBefore(before => [...before, current]);
    //   setCurrent(after[0]);
    //   setAfter(after => after.slice(1));

    default:
      return new Error(`Invalid action type: ${type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(recordReducer, initialValue);

  const { current } = state;

  const record = ({ target }) => {
    dispatch({
      type: 'record',
      payload: target.value,
    });
  };

  const undo = () => {
    dispatch({ type: 'undo' });
  };

  const redo = () => {
    dispatch({ type: 'redo' });
  };

  return (
    <>
      <button aria-label="undo" onClick={undo}>
        undo
      </button>
      <button aria-label="redo" onClick={redo}>
        redo
      </button>
      <input
        type="color"
        value={current}
        onChange={record}
        aria-label="color-picker"
      />
      <div
        style={{ backgroundColor: current, height: '50px', width: '50px' }}
      ></div>
    </>
  );
}

export default App;
