import { Repository, RepositoryInterface } from './types';

export type RepoIdDataType = [number, Repository];

const getLanguage = (lang: string): string => {
    return lang ? lang : null;
};

const getSPDXId = (license: { [key: string]: any }): string => {
    if (license && license.spdx_id !== 'NOASSERTION') {
        return license.spdx_id;
    }
    return null;
};
const getOwnerId = (owner: { [key: string]: any }): number => {
    if (owner && owner.id) {
        return owner.id;
    }
    return null;
};

export const createRepoIdData = (items: { [key: string]: any }[]): RepoIdDataType[] => {
    return items.map((item) => {
        const {
            id,
            name,
            full_name,
            html_url,
            description,
            created_at,
            updated_at,
            pushed_at,
            stargazers_count,
            watchers_count,
            language,
            license,
            owner,
        } = item;
        const data: Repository = new Repository({
            id: id,
            name: name,
            fullName: full_name,
            htmlURL: html_url,
            description: description,
            createDate: new Date(created_at),
            updateDate: new Date(updated_at),
            pushDate: new Date(pushed_at),
            stargazersCount: stargazers_count,
            watchersCount: watchers_count,
            language: getLanguage(language),
            spdxId: getSPDXId(license),
            ownerId: getOwnerId(owner),
        });

        return [id, data];
    });
};
