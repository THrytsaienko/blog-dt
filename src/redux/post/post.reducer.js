import { PostActionTypes } from './post.types';
import { addPost, deletePost } from './post.utils';

const INITIAL_STATE = {
    posts: null
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case PostActionTypes.DELETE_POST:
            return {
                ...state,
                posts: deletePost(state.posts, action.payload)
            };

        case PostActionTypes.ADD_POST:
            return {
                ...state,
                posts: addPost(state.posts, action.payload)
            }
        default:
            return state;
    }
};

export default postReducer;
