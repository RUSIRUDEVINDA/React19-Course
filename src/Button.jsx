import { useEffect, useReducer } from 'react'

function Button({ countToDisplay, buttonName }) {
    //const [count, setCount] = useState(0)

    const reducer = (state, action) => {
        if (action.type == "increment") {
            return { count: state.count + 1 }
        }
        else {
            return { count: state.count - 1 }
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    useEffect(() => {
        countToDisplay(state.count)
    }, [state.count])

    useEffect(() => {
        console.log("component is loaded")
    }, [])

    useEffect(() => {
        return console.log("component is unloaded")
    }, [])

    return (
        <>
            <button onClick={() => dispatch({ type: "increment" })}>
                increment
            </button>

            <button onClick={() => dispatch({ type: "decrement" })}>
                decrement
            </button>
        </>

    )
}


export default Button

