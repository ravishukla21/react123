import {ADD,REDUCE} from "./actiontypes";

export const addAction=(payload)=>{

    return {type:ADD,payload}


}

export const reduceAction=(payload)=>{

return {type:REDUCE,payload}

}


