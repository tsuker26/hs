const defaultState = {
	locationInput: 'Москва',
	dateInput: new Date().toISOString().split('T')[0],
	countDayInput: '1',
	info: {
		location: 'Москва',
		date: new Date().toISOString().split('T')[0],
		countDay: '1',
	},
}

const CHANGE_LOCATION = 'CHANGE_LOCATION'
const CHANGE_DATE = 'CHANGE_DATE'
const CHANGE_COUNT_DAY = 'CHANGE_COUNT_DAY'
const CHANGE_INFO = 'CHANGE_INFO'

export default function searchReducer(state = defaultState, { type, payload }) {
	switch (type) {
		case CHANGE_LOCATION:
			return { ...state, locationInput: payload }
		case CHANGE_DATE:
			return { ...state, dateInput: payload }
		case CHANGE_COUNT_DAY:
			return { ...state, countDayInput: payload }
		case CHANGE_INFO:
			return { ...state, info: payload }
		default:
			return state
	}
}

export const changeLocationAc = payload => ({ type: CHANGE_LOCATION, payload })
export const changeDateAc = payload => ({ type: CHANGE_DATE, payload })
export const changeCountDayAc = payload => ({ type: CHANGE_COUNT_DAY, payload })
export const changeInfoAc = payload => ({ type: CHANGE_INFO, payload })
