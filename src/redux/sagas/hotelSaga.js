import { takeEvery, put, call } from 'redux-saga/effects'
import { getHotels } from '../../api'
import {
	GET_HOTELS,
	setHotelsAc,
	setIsErrorAC,
	setIsLoadingAC,
} from '../reducers/hotelsReducer'

function* hotelsWorker({ payload }) {
	try {
		yield put(setIsLoadingAC(true))
		const hotels = yield call(
			getHotels,
			payload.location,
			payload.date,
			payload.dateOut
		)
		yield put(setHotelsAc(hotels))
		yield put(setIsLoadingAC(false))
	} catch (e) {
		yield put(setIsErrorAC('Не удалось загрузить отели'))
		yield put(setIsLoadingAC(false))
	}
}

export function* hotelsWatcher() {
	yield takeEvery(GET_HOTELS, hotelsWorker)
}
