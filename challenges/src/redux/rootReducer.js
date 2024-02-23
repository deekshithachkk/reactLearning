import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
const { default: cakeReducer } = require("./cake/CakeReducer");
const { IceCreamReducer } = require("./iceCream/IceCreamReducer");

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
    user:userReducer
})

export default rootReducer;