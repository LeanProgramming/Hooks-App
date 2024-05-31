import { useState } from "react";

export const useCounter = ( initialValue = 10  ) => {

    const [counter, setCounter] = useState<number>( initialValue );

    const increment = (step: number = 1) => {
        setCounter( counter + step );
    }

    const decrement = (step: number = 1) => {
        setCounter( counter - step );
    }

    const reset = () => {
        setCounter( initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
