import React from 'react'
import { useState } from 'react'
import { todosuccess } from '../redux/todo/action'

export const Todoinput = ({addtodo}) => {
    const [input, setinput] = useState("")
    console.log(input, "input")
    const handletodo = () => {
        console.log(input, "inputbutton")

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(input,"checkform")
        addtodo(input)
        todosuccess(input)
        setinput("")
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    palceholder="input whatever you want"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}

                />
                <button onClick={handletodo}>ADDDTODO</button>


            </form>



        </div>
    )
}
