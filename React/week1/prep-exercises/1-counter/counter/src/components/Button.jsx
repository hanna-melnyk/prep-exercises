//React/week1/prep-exercises/1-counter/counter/src/components/Button.jsx
import React from 'react';

export const Button = ({addOne}) => {
    return <button onClick={addOne}>Add 1!</button>;
};