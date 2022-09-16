import {combineReducers} from "redux";
import authReducer from "./authReducer";
import hotelsReducer from "./hotelsReducer";

const reducers = combineReducers({
    auth: authReducer,
    hotels: hotelsReducer,
})

export default reducers;