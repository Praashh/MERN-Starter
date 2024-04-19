import { atom } from "recoil";

export const postTitle = atom({
    key: 'postTitle',
    default: ''
});

export const postDescription = atom({
    key: 'postDescription',
    default: ''
});

export const postImage = atom({
    key: 'postImage',
    default: ''
});