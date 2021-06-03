import { FETCH_SEARCH_REPOS_SUCCESS } from './action-types';
import { RepositoriesSI, FetchSearchReposActions } from './types';
import { createRepoIdData } from './parsers';

const initialState: RepositoriesSI = {};

export default (state = initialState, action: FetchSearchReposActions) => {
    switch (action.type) {
        case FETCH_SEARCH_REPOS_SUCCESS:
            const {
                payload: {
                    response: { items },
                },
            } = action;
            createRepoIdData(items).forEach((repoIdData) => {
                const [id, data] = repoIdData;
                state[id] = data;
            });

            return state;
        default:
            return state;
    }
};
