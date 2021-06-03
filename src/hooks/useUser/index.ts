import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';

import { AppState } from '@store/rootReducer';
import { User } from '@store/users/types';

const useUser = (id: number): User => {
    const mapState = useCallback((state: AppState) => state.users[id], [id]);
    const user = useMappedState(mapState);

    return user;
};

export default useUser;
