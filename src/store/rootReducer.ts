import { combineReducers } from 'redux';

import appSearch from './appSearch/reducer';
import repositoryReducer from './repositories/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
    appSearch: appSearch,
    repositories: repositoryReducer,
    users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
