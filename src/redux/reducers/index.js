import { combineReducers } from 'redux'
import authReducer from './authReducer'
import hotelsReducer from './hotelsReducer'
import searchReducer from './searchReducer'
import sortReducer from './SortReducer'

const reducers = combineReducers({
	auth: authReducer,
	hotels: hotelsReducer,
	search: searchReducer,
	sort: sortReducer,
})

export default reducers
