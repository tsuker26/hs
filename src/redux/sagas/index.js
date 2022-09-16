import {all} from'redux-saga/effects'
import {hotelsWatcher} from "./hotelSaga";

export default function* rootSaga (){
    yield all([
        hotelsWatcher()
    ])
}