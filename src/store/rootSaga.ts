import { all, fork } from 'redux-saga/effects';

import fetchSearchReposSaga from './repositories/saga';

export function* rootSaga() {
    yield fork(fetchSearchReposSaga);
}
