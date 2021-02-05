import React from 'react';
import Layout from '../../layouts/Layout';
import Content from './EditUser'

class AddUser extends React.Component {
    
    render() {
        
        return (
            <div>
                <Layout Content = {Content}>

                </Layout>
            </div>
        )
    }
}

export default AddUser;