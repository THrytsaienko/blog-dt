import React from 'react';
import styled from 'styled-components';
import Post from '../post/post';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

class Directory extends React.Component {
   render(){
        const { posts } = this.props;
        return (
            <div>
                <div>
                    <Container>
                        {
                            posts.map(post => <Post key={post.id} post={post}></Post>)
                        }
                    </Container>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts
});

export default connect(mapStateToProps)(Directory);
