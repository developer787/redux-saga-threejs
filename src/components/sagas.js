import { all,call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* increment(action){
    try {
        yield put({type: "INCREMENT", payload: 1});
    } catch (e) {
        yield put({type: "INCREMENT_FAILED", payload: e.message});
    }

}
function* watchIncrement(){
    yield takeEvery('SAGA_INCREMENT', increment)
}

function* changeColor(color){
    try {
    const randomHex = ()=>Math.random()*0xFFFFFF<<0
    const colors = [
        randomHex(),
        randomHex(),
        randomHex(),
        randomHex(),
        randomHex(),
        randomHex(),
    ]
        yield put({type: "CHANGE_COLOR", payload: colors});
    } catch (e) {
        yield put({type: "CHANGE_COLOR_FAILED", payload: e.message});
    }

}
function* watchChangeColor(){
    yield takeEvery('SAGA_CHANGE_COLOR', changeColor)
}

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchChangeColor(),
    ])
}

/*function* fetchUser(action) {
   try {
      yield put({type: "USER_FETCH_SUCCEEDED", user: "Steve"});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}*/

