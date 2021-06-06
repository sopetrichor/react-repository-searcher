import { MOCK_DATA_SUCCESS_EMPTY_RESULTS, MOCK_DATA_SUCCESS_RESULTS } from '@mock-data/index';

import { Repository } from './types';
import { RepoIdDataType, createRepoIdData } from './parsers';

describe('repositories reducer parsers', () => {
    test('it should be returned empty array', () => {
        const testData = MOCK_DATA_SUCCESS_EMPTY_RESULTS.items;
        const received: RepoIdDataType[] = createRepoIdData(testData);
        const expected = [];

        expect(received).toHaveLength(expected.length);
        expect(received).toStrictEqual(expected);
    });

    test('it should be returned array of array which consistof [id, Repository]', () => {
        const testData = MOCK_DATA_SUCCESS_RESULTS.items.slice(0, 3);
        const received: RepoIdDataType[] = createRepoIdData(testData);
        const expected = [
            [
                10270250,
                new Repository({
                    id: 10270250,
                    name: 'react',
                    fullName: 'facebook/react',
                    htmlURL: 'https://github.com/facebook/react',
                    description:
                        'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
                    createDate: new Date('2013-05-24T16:15:54Z'),
                    pushDate: new Date('2021-05-27T14:32:07Z'),
                    updateDate: new Date('2021-05-27T14:59:56Z'),
                    stargazersCount: 168952,
                    watchersCount: 168952,
                    language: 'JavaScript',
                    spdxId: 'MIT',
                    ownerId: 69631,
                }),
            ],
            [
                135786093,
                new Repository({
                    id: 135786093,
                    name: 'react',
                    fullName: 'typescript-cheatsheets/react',
                    htmlURL: 'https://github.com/typescript-cheatsheets/react',
                    description: 'Cheatsheets for experienced React developers getting started with TypeScript',
                    createDate: new Date('2018-06-02T04:08:16Z'),
                    pushDate: new Date('2021-05-19T09:25:11Z'),
                    updateDate: new Date('2021-05-27T14:46:54Z'),
                    stargazersCount: 24951,
                    watchersCount: 24951,
                    language: 'JavaScript',
                    spdxId: 'MIT',
                    ownerId: 50188264,
                }),
            ],
            [
                75396575,
                new Repository({
                    id: 75396575,
                    name: 'react',
                    fullName: 'duxianwei520/react',
                    htmlURL: 'https://github.com/duxianwei520/react',
                    description: ' React+webpack+redux+ant design+axios+less全家桶后台管理框架',
                    createDate: new Date('2016-12-02T13:08:43Z'),
                    pushDate: new Date('2021-04-01T08:25:40Z'),
                    updateDate: new Date('2021-05-27T07:59:00Z'),
                    stargazersCount: 4188,
                    watchersCount: 4188,
                    language: 'JavaScript',
                    spdxId: 'MIT',
                    ownerId: 3249653,
                }),
            ],
        ];

        expect(received).toHaveLength(expected.length);
        received.forEach((item: RepoIdDataType, index) => {
            const [id, data] = item;
            const [expectedRepoId, expectedRepodata] = expected[index];

            expect(id).toBe(expectedRepoId);
            expect(data).toBeInstanceOf(Repository);
            expect(data).toEqual(expectedRepodata);
        });
    });
});
