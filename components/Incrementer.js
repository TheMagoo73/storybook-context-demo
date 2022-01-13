import { useCounter } from "../lib/context/counter-context";

export default function Incrementer() {
    const { incrementCount } = useCounter()

    return <button onClick={() => incrementCount()}>Increment</button>
}