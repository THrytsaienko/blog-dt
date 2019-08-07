import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPost } from '../../redux/post/posts.selectors';
import styled from 'styled-components';
import axios from "axios";
import Comment from '../../components/comment/comment';

export const SinglePost = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 50px auto;
    padding: 15px;
    border: 1px solid #999999;
    background-color: #f5f5f5;
`;

export const CommentTitle = styled.h3`
    margin-top: 30px;
`;

export const PostTitle = styled.h2`
    margin-top: 30px;
`;

class SinglePostPage extends React.Component {
    constructor(){
        super();

        this.state = {
            comments: null
        }
    }

    componentDidMount() {
        const { match, post } = this.props;
        const postId = parseInt(match.params.postId);
        axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
            .then(resp => {
                const comments = resp.data.comments;
                this.setState({
                    comments
                })
            })
            .catch(error => console.log(error));
    }

    render(){
        const { match, post } = this.props;
        const { comments } = this.state;
        return (
            <SinglePost>
                <Link to='/'>← Back to homepage</Link>
                <PostTitle>{post.title}</PostTitle>
                <p>{post.body}</p>
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

                {
                    comments && comments.length > 0 ? (
                        <div>
                            <CommentTitle>Comments</CommentTitle>
                            {
                                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                            }
                        </div>
                    ) :
                        null
                }

            </SinglePost>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: selectPost(ownProps.match.params.postId)(state)
});

export default connect(mapStateToProps)(SinglePostPage);
