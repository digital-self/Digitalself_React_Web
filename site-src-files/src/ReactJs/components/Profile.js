import React from 'react';
import { deletePost, getMyposts } from '../api_calls/Posts';
import Layout from './layouts/Layout';
import Cookies from 'js-cookie';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedPosts: []
        }
    }

    editPost = () => {
        window.location = '/editpost';
    }

    clientGetPosts() {
        getMyposts(Cookies.get('userid'), Cookies.get('token'))
        .then((a) => {
            this.setState({savedPosts: a})
        });
    }

    componentDidMount() {
        this.clientGetPosts();
    }

    delete = (id) => {
        deletePost(Cookies.get('userid'), Cookies.get('token'), id)
        .then((a) => {
            // @Todo - display message to user after succesful delete
            this.clientGetPosts();
        })
    }

    render() {
        if(this.state.savedPosts === false) {
            return <p>You have no saved posts</p>
        } else if (this.state.savedPosts === 'error') {
            return <p>An error occured</p>
        }
      
        const savedPosts =  this.state.savedPosts.map((savedPost) =>
        <li key={savedPost.id}>
            <div>
            <h3>{savedPost.post_title}</h3>
            <p>{savedPost.post_content}</p>
            <div>
                <button onClick = {this.editPost}>Edit post</button>
            </div>
            <button onClick={this.delete.bind(this, savedPost.id)}>Delete Post</button>
            </div>
        </li>
        )

        const Profile = () => {
             
                return(
                    <div>
                        <h3>My Profile</h3>
                        <p><a href="/addpost">Create Post</a></p>
                        <p>Saved Posts</p>
                        <ul>
                            {savedPosts}
                        </ul>
                    </div>
                )
        }
            
        return (
            <Layout Content = {Profile}>
            
            </Layout>
        )
    }
}

export default Profile;