import React from 'react'
import { Todoinput } from './Todoinput';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todofailure, todorequest, todosuccess } from '../redux/todo/action';
import axios from 'axios';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((store) => {
        console.log(store.todocounter.todos, "todostore")
        return store.todocounter.todos;
    })
    console.log(todos, "todos1")
    const handleSubmit = (input) => {
        console.log(input, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
        dispatch(todorequest());
        axios
            .get("http://localhost:8080/todos").then((res) => {
                console.log(res.data, "res.data")
                dispatch(todosuccess(res.data));
            }
            ).catch((err) => {
                dispatch(todofailure())
                console.log(err, "errr")
            })
        // dispatch (todosuccess(input))

    }
    console.log(todos.length,"todos2")

    return (
        <div >
            <Todoinput addtodo={handleSubmit} />
            <h1>list</h1>
            {todos.map((el) => {
                return (
                    <div key={el.id}>
                        <h1 >{el.title}</h1>

                    </div>

                )
            }




            )}
        </div>
    )
}

export default Todo