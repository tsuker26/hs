const defaultState = {
	allHotels: [],
	favoritesHotels: localStorage.getItem('favoriteHotels')
		? JSON.parse(localStorage.getItem('favoriteHotels'))
		: [],
	isLoading: false,
	error: '',
	carouselImg: ['1.png', '2.png', '3.png', '3.png'],
}
const ADD_FAVORITES = 'ADD_FAVORITES'
const REMOVE_FAVORITES = 'REMOVE_FAVORITES'
const SET_HOTELS = 'SET_HOTELS'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_ERROR = 'SET_ERROR'
export const GET_HOTELS = 'GET_HOTELS'

export default function hotelsReducer(state = defaultState, { type, payload }) {
	switch (type) {
		case SET_HOTELS:
			return { ...state, allHotels: payload }
		case ADD_FAVORITES:
			return { ...state, favoritesHotels: [...state.favoritesHotels, payload] }
		case REMOVE_FAVORITES:
			return {
				...state,
				favoritesHotels: [
					...state.favoritesHotels.filter(f => f.favoriteId !== payload),
				],
			}
		case SET_IS_LOADING:
			return { ...state, isLoading: payload }
		case SET_ERROR:
			return { ...state, error: payload }
		default:
			return state
	}
}

export const setHotelsAc = payload => ({ type: SET_HOTELS, payload })
export const getHotelsAc = payload => ({ type: GET_HOTELS, payload })
export const addFavoritesAC = payload => ({ type: ADD_FAVORITES, payload })
export const setIsLoadingAC = payload => ({ type: SET_IS_LOADING, payload })
export const setIsErrorAC = payload => ({ type: SET_ERROR, payload })
export const removeFavoritesAC = payload => ({
	type: REMOVE_FAVORITES,
	payload,
})
