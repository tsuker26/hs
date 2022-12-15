const defaultState = {
	active: false,
	body: null,
}

const MODAL = 'MODAL'

export default function modalReducer(state = defaultState, { type, payload }) {
	switch (type) {
		case MODAL:
			return {
				...state,
				active: payload.active,
				body: payload.body,
			}
		default:
			return state
	}
}

export const setModalAc = payload => ({ type: MODAL, payload })
