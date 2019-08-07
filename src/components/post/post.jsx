import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { deletePost } from '../../redux/post/post.actions';

import styled from 'styled-components';

const PostContainer = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 15px;
    border: 1px solid #999999;
    background-color: #f5f5f5;
    margin-bottom: 15px;
`;

const DeleteButton = styled.button`
    width: 150px;
    height: 30px;
    margin: 20px auto 0 auto;
    cursor: pointer;
    background-color: #0000b8;
    color: #fff;
    border: none;
    outline: none;
`;

class Post extends React.Component {
    handleDelete(postId){
        const postIdToDelete = postId;
        const { deletePost } = this.props;
        axios.get(`https://simple-blog-api.crew.red/posts/${postId}`)
            .then(resp => {
                deletePost(postIdToDelete);
            })
            .catch(error => console.log(error));
    }

    render(){
        const { post } = this.props;
        return (
            <PostContainer>
                <h3>{post.title}</h3>
                <p>Short Description...</p>
                <Link to={`/${post.id}`}>See More Details</Link>
                {
                    post.creator ?
                        <p>Author: {post.creator}</p>
                        :
                        null
                }

                {
                    post.date ?
                        <p>Publish date: {post.date}</p>
                        :
                        null
                }
                <DeleteButton onClick={() => this.handleDelete(post.id)}>Delete Post</DeleteButton>
            </PostContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deletePost: postIdToDelete =>
        dispatch(deletePost(postIdToDelete))
});

export default connect(null, mapDispatchToProps)(Post);
