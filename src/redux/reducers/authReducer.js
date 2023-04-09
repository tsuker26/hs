const authToken = localStorage.getItem('isAuth')
const defaultState = {
	isAuth: !!authToken,
}

const IS_AUTH = 'IS_AUTH'

export default function authReducer(state = defaultState, { type, payload }) {
	switch (type) {
		case IS_AUTH:
			return { ...state, isAuth: payload }
		default:
			return state
	}
}

export const isAuthAc = payload => ({ type: IS_AUTH, payload })
