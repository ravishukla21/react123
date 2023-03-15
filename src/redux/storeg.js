import { legacy_createStore } from "redux";


import { combineReducers, } from "redux";
import { reducer as countreducer  } from "./counter/reducer";
import { reducer as todocounter } from "./todo/reducer";

const rootReducer =combineReducers({
    countreducer,todocounter



})


export const store=legacy_createStore(rootReducer);