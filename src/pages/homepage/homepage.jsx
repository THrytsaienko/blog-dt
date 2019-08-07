import React from 'react';
import { Route } from 'react-router-dom';
import Directory from '../../components/directory/directory';
import SinglePostPage from '../singlePostPage/singlePostPage';
import axios from 'axios';

import { connect } from 'react-redux';
import { getPosts } from '../../redux/post/post.actions';


class HomePage extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        const { getPosts } = this.props;
        axios.get('https://simple-blog-api.crew.red/posts')
            .then(resp => {
                const loadedPosts = resp.data;
                getPosts(loadedPosts);
                this.setState({
                    loading: false
                })
            })
            .catch(error => console.log(error));
    }

    render(){
        const { loading } = this.state;
        return (
            <div>
                {
                    loading ?
                        <p>Waiting for data...</p>
                        : (
                            <div>
                                <Route exact path='/' component={Directory} />
                                <Route exact path='/:postId' component={SinglePostPage} />
                            </div>
                        )
                }
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    getPosts: loadedPosts =>
    dispatch(getPosts(loadedPosts))
});

export default connect(null, mapDispatchToProps)(HomePage);
