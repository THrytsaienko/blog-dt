import { createSelector } from 'reselect';

const selectPosts = state => state.posts.posts;

export const selectPostsCollection = createSelector(
    [selectPosts],
    posts => selectPosts.posts
);

export const selectPost = postId =>
    createSelector(
        [selectPosts],
        posts =>
            posts.find(post => post.id === parseInt(postId))
    );
