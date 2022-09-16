import {combineReducers} from "redux";
import authReducer from "./authReducer";
import hotelsReducer from "./hotelsReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
    auth: authReducer,
    hotels: hotelsReducer,
    search: searchReducer,
})

export default reducers;