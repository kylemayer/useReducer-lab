import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterAll(() => cleanup());

  it('renders App, displays color picker and buttons', () => {
    const app = render(<App />);

    const red = '#ff0000';
    const blue = '#0000ff';
    const yellow = '#ffff00';
    const green = '#00ff00';

    const colorPicker = app.getByLabelText('color-picker');
    const undo = app.getByLabelText('undo');
    const redo = app.getByLabelText('redo');

    fireEvent.change(colorPicker, { target: { value: red } });
    fireEvent.change(colorPicker, { target: { value: blue } });
    fireEvent.change(colorPicker, { target: { value: green } });
    fireEvent.click(undo);
    fireEvent.click(undo);
    fireEvent.click(redo);
    fireEvent.change(colorPicker, { target: { value: yellow } });
    fireEvent.click(undo);
    fireEvent.click(redo);
    fireEvent.click(redo);
    fireEvent.click(redo);

    expect(colorPicker.value).toBe(green);
  });
});
