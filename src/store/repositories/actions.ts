import { FETCH_SEARCH_REPOS_REQUEST, FETCH_SEARCH_REPOS_SUCCESS, FETCH_SEARCH_REPOS_FAILURE } from './action-types';
import {
    FetcchSearchReposRequestACT,
    FetchSearchReposSuccessACT,
    FetchSearchReposFailureACT,
    FetchSearchReposRequestPI,
    FetchSearchReposSuccessPI,
    FetchSearchReposFailurePI,
} from './types';

export const fetchSearchReposRequest = (payload: FetchSearchReposRequestPI): FetcchSearchReposRequestACT => ({
    type: FETCH_SEARCH_REPOS_REQUEST,
    payload,
});

export const fetchSearchReposSuccess = (payload: FetchSearchReposSuccessPI): FetchSearchReposSuccessACT => ({
    type: FETCH_SEARCH_REPOS_SUCCESS,
    payload,
});

export const fetchSearchReposFailure = (payload: FetchSearchReposFailurePI): FetchSearchReposFailureACT => ({
    type: FETCH_SEARCH_REPOS_FAILURE,
    payload,
});
