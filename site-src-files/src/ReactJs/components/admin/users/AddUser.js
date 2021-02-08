import React from 'react';
import Layout from '../../layouts/Layout';
import Content from './AddEdit';
import addUser from '../../../api_calls/Users'

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