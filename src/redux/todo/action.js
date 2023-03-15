import { GET_TODO_FAILURE,GET_TODO_REQUEST,GET_TODO_SUCCESS } from "./actiontypes";


export const todorequest=()=>{
    console.log("todorequest")
    return {type:GET_TODO_REQUEST}
}

export const todosuccess=(payload)=>{
    console.log(payload,"todosuccess");
    return {type:GET_TODO_SUCCESS,payload}
}

export const todofailure=()=>{
    return {type:GET_TODO_FAILURE}
}