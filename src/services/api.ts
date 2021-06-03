import { FetchSearchReposRequestPI } from '@store/repositories/types';

export const API_ROOT = 'https://api.github.com/search/repositories';

export const callAPI = (endpoint: string) => {
    const fullURL = API_ROOT + endpoint;

    return fetch(fullURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((json) => {
            return json;
        })
        .catch((error: any) => {
            throw error;
        });
};

export const fetchSearchRepos = (payload: FetchSearchReposRequestPI) => {
    const { query, page, perPage } = payload;
    return callAPI(`?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`);
};
