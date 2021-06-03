import { FETCH_SEARCH_REPOS_REQUEST, FETCH_SEARCH_REPOS_SUCCESS, FETCH_SEARCH_REPOS_FAILURE } from './action-types';

export interface RepositoryInterface {
    id: number;
    name: string;
    fullName: string;
    htmlURL: string;
    description: string;
    createDate: Date;
    updateDate: Date;
    pushDate: Date;
    stargazersCount: number;
    watchersCount: number;
    language: string;
    spdxId: string;
    ownerId: number;
}

export class Repository implements RepositoryInterface {
    id: number;
    name: string;
    fullName: string;
    htmlURL: string;
    description: string;
    createDate: Date;
    updateDate: Date;
    pushDate: Date;
    stargazersCount: number;
    watchersCount: number;
    language: string;
    spdxId: string;
    ownerId: number;

    constructor({
        id,
        name,
        fullName,
        htmlURL,
        description,
        createDate,
        pushDate,
        updateDate,
        stargazersCount,
        watchersCount,
        language,
        spdxId,
        ownerId,
    }: RepositoryInterface) {
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.htmlURL = htmlURL;
        this.description = description;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.pushDate = pushDate;
        this.stargazersCount = stargazersCount;
        this.watchersCount = watchersCount;
        this.language = language;
        this.spdxId = spdxId;
        this.ownerId = ownerId;
    }

    get stargazersURL(): string {
        return this.htmlURL + '/stargazers';
    }
    get formattedStargazersCount(): string {
        const num = this.stargazersCount;

        if (num >= 1000 && num < 1e6) {
            return (num / 1e3).toFixed(1).replace(/\.0+$/, '') + 'k';
        } else if (num > 1e6) {
            return (num / 1e6).toFixed(1).replace(/\.0+$/, '') + 'm';
        }

        return this.stargazersCount.toString();
    }
}

// State Interface
export interface RepositoriesSI {
    [key: number]: Repository;
}

// Payload Interface
export interface FetchSearchReposRequestPI {
    query: string;
    page: number;
    perPage: number;
    reload?: boolean;
}

export interface FetchSearchReposSuccessPI {
    response: any;
}

export interface FetchSearchReposFailurePI {
    error: string;
}

// Action Creator Type
export type FetcchSearchReposRequestACT = {
    type: typeof FETCH_SEARCH_REPOS_REQUEST;
    payload: FetchSearchReposRequestPI;
};

export type FetchSearchReposSuccessACT = {
    type: typeof FETCH_SEARCH_REPOS_SUCCESS;
    payload: FetchSearchReposSuccessPI;
};

export type FetchSearchReposFailureACT = {
    type: typeof FETCH_SEARCH_REPOS_FAILURE;
    payload: FetchSearchReposFailurePI;
};

// Actions Type
export type FetchSearchReposActions =
    | FetcchSearchReposRequestACT
    | FetchSearchReposSuccessACT
    | FetchSearchReposFailureACT;
