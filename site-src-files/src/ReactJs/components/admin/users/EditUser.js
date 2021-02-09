import React from 'react';
import Layout from '../../layouts/Layout';
import AddEdit from './AddEdit';

class EditUser extends React.Component {
    
    updateUser = (e) => {
        e.preventDefault();
        console.log('function reached');
    }

    render() {
        const Content = () => {
            return (
                <AddEdit formSubmitted = {this.updateUser}>

                </AddEdit>
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

export default EditUser;