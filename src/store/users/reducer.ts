import { FETCH_SEARCH_REPOS_SUCCESS } from '@store/repositories/action-types';

import { UsersSI, ActionsRelatedToUsers } from './types';
import { createUserIdData } from './parsers';

import { User } from './types';

const initialState: UsersSI = {};

export default (state = initialState, action: ActionsRelatedToUsers) => {
    switch (action.type) {
        case FETCH_SEARCH_REPOS_SUCCESS:
            const { response } = action.payload;
            createUserIdData(response.items).forEach((userIdData) => {
                const [id, data] = userIdData;
                state[id] = data;
            });

            return state;
        default:
            return state;
    }
};
