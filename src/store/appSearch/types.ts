import {
    FetcchSearchReposRequestACT,
    FetchSearchReposSuccessACT,
    FetchSearchReposFailureACT,
} from '@store/repositories/types';

// State Interface
export interface AppSearchSI {
    isPending: boolean;
    error: Error;
    query: string;
    page: number;
    perPage: number;
    itemIds: number[];
    itemTotalCount: number;
}

// Actions Type
export type ActionsRelatedToAppSearch =
    | FetcchSearchReposRequestACT
    | FetchSearchReposSuccessACT
    | FetchSearchReposFailureACT;
