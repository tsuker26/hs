import {takeEvery, put, call} from 'redux-saga/effects';
import {getHotels} from "../../api";
import {GET_HOTELS, setHotelsAc} from "../reducers/hotelsReducer";


function* hotelsWorker({payload}) {
    try {
        const {results} = yield call(getHotels, payload);
        yield put(setHotelsAc(results.hotels))
    } catch (e) {
        console.log(e)
    }
}

export function* hotelsWatcher() {
    yield takeEvery(GET_HOTELS, hotelsWorker)
}