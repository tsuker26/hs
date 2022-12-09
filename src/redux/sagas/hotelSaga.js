import { takeEvery, put, call } from 'redux-saga/effects'
import { getHotels } from '../../api'
import { GET_HOTELS, setHotelsAc } from '../reducers/hotelsReducer'

function* hotelsWorker({ payload }) {
	try {
		const hotels = yield call(
			getHotels,
			payload.locationInput,
			payload.dateInput,
			payload.dateOut
		)
		yield put(setHotelsAc(hotels))
	} catch (e) {
		console.log(e)
	}
}

export function* hotelsWatcher() {
	yield takeEvery(GET_HOTELS, hotelsWorker)
}
