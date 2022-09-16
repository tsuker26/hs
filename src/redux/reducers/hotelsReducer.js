const defaultState = {
    allHotels: [],
    favoritesHotels: [],
}
const ADD_FAVORITES = 'ADD_FAVORITES'
const REMOVE_FAVORITES = 'REMOVE_FAVORITES'
const SET_HOTELS = 'SET_HOTELS'
export const GET_HOTELS = 'GET_HOTELS'


export default function hotelsReducer(state = defaultState, {type, payload}) {
    switch (type) {
        case SET_HOTELS:
            return {...state, allHotels: payload}
        case ADD_FAVORITES:
            return {...state, favoritesHotels: [...state.favoritesHotels, payload]}
        case REMOVE_FAVORITES:
            return {...state, favoritesHotels: [...state.favoritesHotels.filter(f => f.id !== payload)]}
        default:
            return state
    }
}


export const setHotelsAc = (payload) => ({type: SET_HOTELS, payload})
export const getHotelsAc = (payload) => ({type: GET_HOTELS,payload})
export const addFavoritesAC = (payload) => ({type: ADD_FAVORITES, payload})
export const removeFavoritesAC = (payload) => ({type: REMOVE_FAVORITES, payload})