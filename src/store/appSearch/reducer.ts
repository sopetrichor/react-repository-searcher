import {
    FETCH_SEARCH_REPOS_REQUEST,
    FETCH_SEARCH_REPOS_SUCCESS,
    FETCH_SEARCH_REPOS_FAILURE,
} from '@store/repositories/action-types';

import { AppSearchSI, ActionsRelatedToAppSearch } from './types';
import { createRepoIds } from './parser';

const initialState = (): AppSearchSI => {
    return {
        isPending: false,
        error: undefined,
        query: '',
        page: 1,
        perPage: 30,
        itemIds: [],
        itemTotalCount: 0,
    };
};

export default (state = initialState(), action: ActionsRelatedToAppSearch) => {
    switch (action.type) {
        case FETCH_SEARCH_REPOS_REQUEST:
            const {
                payload: { query, page, perPage, reload },
            } = action;

            if (reload) {
                return {
                    ...initialState(),
                    isPending: true,
                    query: query,
                    page: page,
                    perPage: perPage,
                };
            }

            return {
                ...state,
                isPending: true,
                query: query,
                page: page,
                perPage: perPage,
            };
        case FETCH_SEARCH_REPOS_SUCCESS:
            const {
                payload: {
                    response: { total_count, items },
                },
            } = action;
            const { itemIds } = state;
            const repoIds = createRepoIds(items, itemIds);
            const repoTotalCount = total_count;

            return { ...state, isPending: false, itemIds: repoIds, itemTotalCount: repoTotalCount };
        case FETCH_SEARCH_REPOS_FAILURE:
            const {
                payload: { error },
            } = action;
            return { ...state, error: error };
        default:
            return state;
    }
};
