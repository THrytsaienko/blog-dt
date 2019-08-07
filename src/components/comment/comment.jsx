import React from 'react';
import styled from 'styled-components';

const CommentItem = styled.div`
    margin: 20px 0;
    text-align: left;
`;

const Comment = ({ comment }) => (
    <CommentItem>
        <p>{comment.body}</p>
        <p>Comment ID: {comment.id}</p>
    </CommentItem>
);

export default Comment;
