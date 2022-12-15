const defaultState = {
	sortName: 'stars',
	sortBy: 'ASC',
}

const SORT_NAME = 'SORT_NAME'
const SORT_BY = 'SORT_BY'

export default function sortReducer(state = defaultState, { type, payload }) {
	switch (type) {
		case SORT_NAME:
			return { ...state, sortName: payload }
		case SORT_BY:
			return { ...state, sortBy: payload }
		default:
			return state
	}
}

export const setFilterNameAc = payload => ({ type: SORT_NAME, payload })
export const setArrowNameAc = payload => ({ type: SORT_BY, payload })
