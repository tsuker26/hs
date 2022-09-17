import {combineReducers} from "redux";
import authReducer from "./authReducer";
import hotelsReducer from "./hotelsReducer";
import searchReducer from "./searchReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
    auth: authReducer,
    hotels: hotelsReducer,
    search: searchReducer,
    filter: filterReducer,
})

export default reducers;