import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';

import { AppState } from '@store/rootReducer';
import { Repository } from '@store/repositories/types';

const useUser = (id: number): Repository => {
    const mapState = useCallback((state: AppState) => state.repositories[id], [id]);
    const repo = useMappedState(mapState);

    return repo;
};

export default useUser;
