import { FetchSearchReposSuccessACT } from '@store/repositories/types';

export enum UserType {
    Organization = 0,
    User = 1,
}

export interface UserInterface {
    id: number;
    avatarURL: string;
    htmlURL: string;
    type: UserType;
}

export class User implements UserInterface {
    id: number;
    avatarURL: string;
    htmlURL: string;
    type: UserType;

    constructor({ id, avatarURL, htmlURL, type }: UserInterface) {
        this.id = id;
        this.avatarURL = avatarURL;
        this.htmlURL = htmlURL;
        this.type = type;
    }
}

// State Interface
export interface UsersSI {
    [key: number]: User;
}

export type ActionsRelatedToUsers = FetchSearchReposSuccessACT;
