import React from 'react';
import {deleteSavedPost, getMyposts} from '../api_calls/Posts';
import Layout from './layouts/Layout';
import {Auth} from '../app_functions/Auth';
import {getUserId} from '../app_functions/GetCookies';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedPosts: [],
            userId: []
        }
    }

    editPost = () => {
        window.location = '/editpost';
    }

    clientGetPosts() {
        getMyposts(getUserId())
            .then((a) => {
                this.setState({savedPosts: a})
            });
    }

    componentDidMount() {
        this.setState({userId: getUserId()});
        if (Auth().isLoggedIn()) {
            this.clientGetPosts();
        }
    }

    /**
     * Removes a post from my saved list.
     *
     * @param id
     */
    delete = (id) => {
        deleteSavedPost(this.state.userId, id)
            .then((a) => {
                // @Todo - display message to user after succesful delete
                this.clientGetPosts();
            })
    }

    render() {
        if (this.state.savedPosts === false) {
            return <p>You have no saved posts</p>
        } else if (this.state.savedPosts === 'error') {
            return <p>An error occured</p>
        }

        const savedPosts = this.state.savedPosts.map((savedPost) =>
            <li key={savedPost.id + Math.random()}>
                {/* @todo - remove this math random when duplicated my posts are fixed on the server. */}
                <div>
                    <h3>{savedPost.post_title}</h3>
                    <p>{savedPost.post_content}</p>
                    <div>
                        <button onClick={this.editPost}>Edit post</button>
                    </div>
                    <button onClick={this.delete.bind(this, savedPost.id)}>Delete Post</button>
                </div>
            </li>
        )

        const Profile = () => {

            return (
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
            <Layout Content={Profile}></Layout>
        )
    }
}

export default Profile;
