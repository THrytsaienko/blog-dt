import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { addPost } from '../../redux/post/post.actions';
import { connect } from 'react-redux';

const PopupOpen = styled.button`
    width: 200px;
    height: 50px;
    cursor: pointer;
    background-color: #0000b8;
    color: #fff;
    border: none;
    outline: none;
`;

const Popup = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 20px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
`;

const AddPostButton = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
    background-color: #0000b8;
    color: #fff;
    border: none;
    outline: none;
    margin: 15px auto 0 auto;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CloseButton = styled.p`
    cursor: pointer;
    font-size: 12px;
`;

class AddPost extends React.Component {
    constructor(){
        super();

        this.state = {
            isShown: false,
            title: '',
            body: ''
        }
    }

    openPopup(){
        this.setState({
            isShown: true
        })
    }

    addPost(){
        const { title, body } = this.state;
        const newPost = Object.assign({}, {
            'title': title,
            'body': body
        });
        const { addPost } = this.props;
        axios.post('https://simple-blog-api.crew.red/posts', newPost, {
            'Content-Type': 'application/json'
        }).then(response => {
            const addedPost = response.data;
            addPost(addedPost);
            this.setState({
                isShown: false,
                title: '',
                body: ''
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit(e){
        e.preventDefault();
    }

    closePopup(){
        this.setState({
            isShown: false
        })
    }

    render(){
        return (
            <div>
                <PopupOpen onClick={() => this.openPopup()}>Add Post</PopupOpen>
                {
                    this.state.isShown ? (
                    <Popup>
                        <Row>
                            <h4>Add Post</h4>
                            <CloseButton onClick={() => this.closePopup()}>Close</CloseButton>
                        </Row>

                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label htmlFor="#title">Title of the Post</label>
                                <input name='title' onChange={this.handleChange.bind(this)} id='title' type="text" value={this.state.title}/>
                            </div>

                            <div>
                                <label htmlFor="#body">Text</label>
                                <input name='body' onChange={this.handleChange.bind(this)} id='body' type="text" value={this.state.body}/>
                            </div>

                            <AddPostButton onClick={() => this.addPost()}>Add Post</AddPostButton>
                        </form>
                    </Popup>
                    ) :
                    null
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPost: addedPost => dispatch(addPost(addedPost))
});

export default connect(null, mapDispatchToProps)(AddPost);
