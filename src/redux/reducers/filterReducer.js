const defaultState = {
    filterName: 'stars',
    arrowName: 'ASC'
}

const FILTER_NAME = 'FILTER_NAME'
const ARROW_NAME = 'ARROW_NAME'


export default function filterReducer(state = defaultState, {type, payload}) {
    switch (type) {
        case FILTER_NAME :
            return {...state, filterName: payload}
        case ARROW_NAME :
            return {...state, arrowName: payload}
        default:
            return state
    }
}


export const setFilterNameAc = (payload) => ({type: FILTER_NAME, payload})
export const setArrowNameAc = (payload) => ({type: ARROW_NAME, payload})