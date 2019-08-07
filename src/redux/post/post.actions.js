import { PostActionTypes } from './post.types';

export const getPosts = posts => ({
    type: PostActionTypes.GET_POSTS,
    payload: posts
});

export const deletePost = post => ({
    type: PostActionTypes.DELETE_POST,
    payload: post
});

export const addPost = post => ({
    type: PostActionTypes.ADD_POST,
    payload: post
})
