import React from 'react';
import { getMyposts } from '../api_calls/ApiCalls';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedPosts: []
        }
    }

    componentDidMount() {
        getMyposts(localStorage.userId, localStorage.token)
        .then((a) => {
            this.setState({savedPosts: a})
        });
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
            </div>
        </li>
        )

        return (
            <div>
                My Profile
                <p>Saved Posts</p>
                <ul>
                    {savedPosts}
                </ul>
            </div>
        )
    }
}

export default Profile;