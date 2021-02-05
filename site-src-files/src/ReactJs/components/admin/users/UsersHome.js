import React from 'react';
import Layout from '../../layouts/Layout';

class UsersHome extends React.Component {
    
    addUser = () => {
        window.location = '/adduser'
    }

    editUser = () => {
        window.location = '/edituser'
    }

    userRedirect = (route) => {
        window.location = `/${route}` ;
    }

    render() {
        const Content = () => {
            return (
                    <div>
                        <h1>Manage Users</h1>
                        <div>
                            <button id="adduser" onClick={() => this.userRedirect('adduser')}>Add User</button>
                        </div>
                        <div>
                            <button onClick={() => this.userRedirect('edituser')}>Edit User</button>
                        </div>
                        <div>
                            <button onClick={() => this.userRedirect('listusers')}>List Users</button>
                        </div>
                    </div>
                )
        }

        return (
            <div>
                <Layout Content = {Content}>
                </Layout>        
            </div>
        )
    }
}

export default UsersHome;