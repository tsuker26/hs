import { combineReducers } from 'redux'
import authReducer from './authReducer'
import hotelsReducer from './hotelsReducer'
import searchReducer from './searchReducer'
import sortReducer from './sortReducer'
import modalReducer from './modalReducer'

const reducers = combineReducers({
	auth: authReducer,
	hotels: hotelsReducer,
	search: searchReducer,
	sort: sortReducer,
	modal: modalReducer,
})

export default reducers
