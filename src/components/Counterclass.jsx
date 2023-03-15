import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { addAction, reduceAction } from '../redux/counter/action';

const Counterclass = () => {
    const count=useSelector((state)=>{
        console.log(state,"statecheck")
        return state.countreducer.counter;
    })
    const dispatch=useDispatch();


    const handleADD=()=>{
        dispatch(addAction(1))

    }

    const handleREDUCE=()=>{
        dispatch(reduceAction(1))

    }
    console.log(count,"count")
  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={handleADD}>ADD</button>
        <button onClick={handleREDUCE}>REDUCE</button>



    </div>


  )
}

export default Counterclass