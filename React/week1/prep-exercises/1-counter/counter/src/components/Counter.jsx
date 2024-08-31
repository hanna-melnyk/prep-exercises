//React/week1/prep-exercises/1-counter/counter/src/components/Counter.jsx
import React, { useState } from 'react';
import {Count} from "./Count.jsx";
import {Button} from "./Button.jsx";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    return (
        <div>
            <h1>{feedback}</h1>
            <Count count={count}/>
            <Button addOne={() => setCount(count + 1)}/>
        </div>
    );
};