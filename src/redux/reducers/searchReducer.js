const defaultState = {
	location: 'Москва',
	date: new Date().toISOString().split('T')[0],
	countDay: '1',
}

const CHANGE = 'CHANGE'

export default function searchReducer(state = defaultState, { type, payload }) {
	switch (type) {
		case CHANGE:
			return {
				...state,
				location: payload.location,
				date: payload.date,
				countDay: payload.countDay,
			}
		default:
			return state
	}
}

export const changeInfoAc = payload => ({ type: CHANGE, payload })
