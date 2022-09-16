const defaultState = {
    allHotels: [],
    favoritesHotels: [],
}

const SET_HOTELS = 'SET_HOTELS'
export const GET_HOTELS = 'GET_HOTELS'


export default function hotelsReducer(state = defaultState, {type, payload}) {
    switch (type) {
        case SET_HOTELS:
            return {...state, allHotels: payload}
        default:
            return state
    }
}


export const setHotelsAc = (payload) => ({type: SET_HOTELS, payload})
export const getHotelsAc = () => ({type: GET_HOTELS})