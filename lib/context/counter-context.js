const { createContext, useState, useContext } = require("react");

const CounterContext = createContext()

const CounterProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    const incrementCount = () => setCount(count + 1)

    const decrementCount = () => setCount(count - 1)

    return (
        <CounterContext.Provider value={{
            count,
            incrementCount,
            decrementCount
        }}>
            {children}
        </CounterContext.Provider>
    )
}

const useCounter = () => {
    const context = useContext(CounterContext)
  
    if(context === undefined) {
      throw new Error("useCounter must be used with in a CounterProvider")
    }
  
    return context
}

export { CounterContext,  CounterProvider, useCounter}