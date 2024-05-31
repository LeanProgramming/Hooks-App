import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(0);

    return (

        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr />

            <button className="btn btn-outline-success mx-1" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-outline-danger mx-1" onClick={() => decrement(2)}>-1</button>
            <button className="btn btn-outline-warning mx-1" onClick={reset}>Reset</button>
        </>
    )
}
