import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            userId: null,
            myPosts: []
        }
    }

    

    render() {

        return (
            <div>
                My Profile
                <p>Saved Posts</p>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

export default Profile;