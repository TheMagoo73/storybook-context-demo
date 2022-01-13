import { useCounter } from "../lib/context/counter-context";

export default function Decrementer() {
    const { decrementCount } = useCounter()

    return <button onClick={() => decrementCount()}>Decrement</button>
}