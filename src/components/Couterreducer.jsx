import React ,{useState}from "react";
import { addAction,reduceAction } from "../counterreducer/action";
import {store}  from "../store"


export const Counterreducer=()=>{
    const [state,setstate]=useState(0)
    // console.log(store.getState())
    // console.log(store,"store")
    const {dispatch,subscribe}=store;
    subscribe(()=>{
        console.log(store.getState(),"check");

        setstate((prev)=>prev+1)

    })
    const addok=()=>{
        dispatch(addAction())
      
    
    }
    const reduceok=()=>{
        dispatch(reduceAction())
    
    
    }


return(

    <div>
        {/* <h1>{state}:useState123</h1> */}
        <h1>counterreducer:{store.getState().counter}</h1>
        <button onClick={addok}>ADD</button>
        <button onClick={reduceok}>rREDUCE</button>




    
    
    
    
    </div>
)


}