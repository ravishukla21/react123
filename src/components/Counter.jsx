
import { useReducer } from "react";


export const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        console.log(state, action, "reducer_ke_andaar")
        const { type, payload } = action;
        switch (type) {
            case "ADD":
                return state + payload;
            case "MINUS":
                return state-payload;
            default:
                return state;
        }

    }

    const handleadd = () => {
        dispatch({ type: "ADD", payload: 1 })

    }
    const handlereduce=()=>{
        dispatch({ type: "MINUS", payload: 1 })

    }
    const [state, dispatch] = useReducer(reducer, initialState)


    return <div>

        <h1>hello:{state}</h1>

        <button onClick={handleadd}>ADD</button>
        <button onClick={ handlereduce}>REDUCE</button>

    </div>
}