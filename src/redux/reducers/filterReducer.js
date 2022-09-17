const defaultState = {
    filterId: 0,
    arrowId:0
}

const FILTER_ID = 'FILTER_ID'
const ARROW_ID = 'ARROW_ID'


export default function filterReducer(state = defaultState, {type, payload}) {
    switch (type) {
        case FILTER_ID :
            return {...state, filterId: payload}
        case ARROW_ID :
            return {...state, arrowId: payload}
        default:
            return state
    }
}


export const setFilterIdAc = (payload) => ({type: FILTER_ID , payload})
export const setArrowIdAc = (payload) => ({type: ARROW_ID , payload})