import { MOCK_DATA_SUCCESS_EMPTY_RESULTS, MOCK_DATA_SUCCESS_RESULTS } from '@mock-data/index';

import { User, UserType } from './types';
import { UserIdDataType, createUserIdData } from './parsers';

describe('users reducer parsers', () => {
    test('it should be returned empty array', () => {
        const testData = MOCK_DATA_SUCCESS_EMPTY_RESULTS.items;
        const received: UserIdDataType[] = createUserIdData(testData);
        const expected = [];

        expect(received).toHaveLength(expected.length);
        expect(received).toStrictEqual(expected);
    });

    test('it should be returned array of array which consistof [id, User]', () => {
        const testData = MOCK_DATA_SUCCESS_RESULTS.items.slice(0, 3);
        const received: UserIdDataType[] = createUserIdData(testData);
        const expected = [
            [
                69631,
                new User({
                    id: 69631,
                    avatarURL: 'https://avatars.githubusercontent.com/u/69631?v=4',
                    htmlURL: 'https://github.com/facebook',
                    type: UserType['Organization'],
                }),
            ],
            [
                50188264,
                new User({
                    id: 50188264,
                    avatarURL: 'https://avatars.githubusercontent.com/u/50188264?v=4',
                    htmlURL: 'https://github.com/typescript-cheatsheets',
                    type: UserType['Organization'],
                }),
            ],
            [
                3249653,
                new User({
                    id: 3249653,
                    avatarURL: 'https://avatars.githubusercontent.com/u/3249653?v=4',
                    htmlURL: 'https://github.com/duxianwei520',
                    type: UserType['User'],
                }),
            ],
        ];

        expect(received).toHaveLength(expected.length);
        received.forEach((item: UserIdDataType, index) => {
            const [id, data] = item;
            const [expectedUserId, expectedUserdata] = expected[index];

            expect(id).toBe(expectedUserId);
            expect(data).toBeInstanceOf(User);
            expect(data).toEqual(expectedUserdata);
        });
    });
});
