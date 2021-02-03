import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <p><a href="/profile">Profile</a></p>
                <p><a href="/register">Register</a></p>
                <p><a href="/login">Login</a></p>
                <p><a href="/">Home</a></p>
            </div>
        )
    }
}

export default Header;