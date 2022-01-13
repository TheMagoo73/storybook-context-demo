import { CounterContext } from "../../lib/context/counter-context";
import { useParameter } from "@storybook/addons";
import { useState } from "react";

export default function CounterDecorator(Story, context) {

    const initialState = useParameter('counter', {
        incrementCount: () => {},
        decrementCount: () => {},
        count: 0
    })

    const [state, setState] = useState({...initialState})

    return (
        <div>
            <CounterContext.Provider value={state}>
                <Story/>
            </CounterContext.Provider>
        </div>
    )
}