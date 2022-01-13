import { useCounter } from "../lib/context/counter-context";

export default function CounterDisplay() {

    const { count } = useCounter()

    return <h1>{count}</h1>
}