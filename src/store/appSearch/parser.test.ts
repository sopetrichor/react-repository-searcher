import { MOCK_DATA_SUCCESS_EMPTY_RESULTS, MOCK_DATA_SUCCESS_RESULTS } from '@mock-data/index';

import { createRepoIds } from './parser';

describe('appSearch reducer parser', () => {
    test('it should be returned a empty array', () => {
        const testData = MOCK_DATA_SUCCESS_EMPTY_RESULTS.items;
        const received: number[] = createRepoIds(testData);
        const expected = [];

        expect(received).toHaveLength(expected.length);
        expect(received).toStrictEqual(expected);
    });

    test('it should be returned a non-empty array', () => {
        const testData = MOCK_DATA_SUCCESS_RESULTS.items.slice(0, 3);
        const received: number[] = createRepoIds(testData);
        const expected = [10270250, 135786093, 75396575];

        expect(received).toHaveLength(expected.length);
        expect(received).toStrictEqual(expected);
    });

    test('it should be returned a merged array which consist of new ids and the existed ids', () => {
        const testData = MOCK_DATA_SUCCESS_RESULTS.items.slice(3, 7);
        const testDataExistedIds = [10270250, 135786093, 75396575];
        const received: number[] = createRepoIds(testData, testDataExistedIds);
        const expected = [10270250, 135786093, 75396575, 90759930, 77513419, 72628285, 248295170];

        expect(received).toHaveLength(expected.length);
        expect(received).toStrictEqual(expected);
    });
});
