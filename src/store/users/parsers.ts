import { User } from './types';

type UserIdDataType = [number, User];

export const createUserIdData = (items: { [key: string]: any }[]): UserIdDataType[] => {
    return items.map((item) => {
        const { owner } = item;
        const { id, avatar_url, html_url, type } = owner;
        const data: User = new User({
            id: id,
            avatarURL: avatar_url,
            htmlURL: html_url,
            type: User[type],
        });

        return [id, data];
    });
};
