import { call, put, takeLatest, all, delay } from 'redux-saga/effects';

import { api } from '@services/index';
// import { MOCK_DATA_SUCCESS_EMPTY_RESULTS, MOCK_DATA_SUCCESS_RESULTS } from '@mock-data/index';

import { FetcchSearchReposRequestACT } from './types';
import { fetchSearchReposSuccess, fetchSearchReposFailure } from './actions';
import { FETCH_SEARCH_REPOS_REQUEST } from './action-types';

function* fetchSearchRepos(action: FetcchSearchReposRequestACT) {
    try {
        const response = yield call(api.fetchSearchRepos, action.payload);
        yield put(fetchSearchReposSuccess({ response: response }));

        // yield delay(3000);
        // const response = yield MOCK_DATA_SUCCESS_EMPTY_RESULTS;
        // yield put(fetchSearchReposSuccess({ response: response }));

        // yield delay(3000);
        // const response = yield MOCK_DATA_SUCCESS_RESULTS;
        // yield put(fetchSearchReposSuccess({ response: response }));
    } catch (e) {
        yield put(fetchSearchReposFailure({ error: e }));
    }
}

function* watchFetchSearchRepos() {
    yield takeLatest(FETCH_SEARCH_REPOS_REQUEST, fetchSearchRepos);
}

export default watchFetchSearchRepos;
