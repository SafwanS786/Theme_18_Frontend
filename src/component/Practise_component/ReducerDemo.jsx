import React, { useReducer, useMemo, useCallback } from 'react'


function reducer(state, action) {
    if (action === "incerement") {
        state = state + 1
        return state
    }

    if (action === "decrement") {
        state = state - 1
        return state
    }
    return state
}
export default function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, 0)
    const value = useMemo(() => {
        console.log("useMemo Running check")
        return 'hello'
    }, []);

    const handleClick = useCallback(() => {
        console.log("useCallback testing");
    }, [])

    console.log("Hello moj ma")
    return (
        <div>
            <h1>This is Reducer Demo</h1>

            <h2>Count: {state}</h2>

            <button onClick={() => dispatch("incerement")}>Increases</button>
            <button onClick={() => dispatch("decrement")}>Decrease</button>

            {/* <button onClick={() => handleClick()}>Click</button> */}
            <button onClick={handleClick}>Click</button>


        </div>
    )
}
