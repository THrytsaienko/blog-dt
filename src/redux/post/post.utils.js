export const addPost = (posts, postToAdd) => {
    return [...posts, { ...postToAdd }];
};

export const deletePost = (posts, postToDelete) => {
    const existingPost = posts.find(post => post.id === postToDelete);

    return posts.filter(post => post.id !== existingPost.id)
};
