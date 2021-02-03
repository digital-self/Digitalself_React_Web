import React from 'react';
import { register } from '../../api_calls/ApiCalls';
import Layout from '../layouts/Layout';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            phoneNumber: '',
            type: null,
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const nam = e.target.name;
        const val = e.target.value;

        this.setState({[nam]: val});
        
        register(this.state).then((a) => {
            
            if (a === 'error') {
                window.location =  '/register';
            } else if (a === false) {
                window.location =  '/register';
            } else {
                window.location =  '/login';
            }
        });
    }

    changehandler = (e) => {
        const nam = e.target.name;
        const val = e.target.value;

        this.setState({[nam]: val});
    }
    
    render() {
           
        const Register = () => {
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label htmlFor='fname'>First Name: </label>
                            <input id='fname' type='text' name='first_name' />
                        </div>
                        <div>
                            <label htmlFor='lname'>Last Name: </label>
                            <input id='lname' type='text' name='last_name' />
                        </div>
                        
                        <div>

                        </div>
                        <label htmlFor='phone'>Phone Number: </label>
                        <input id='phone' type='text' name='phoneNumber'/>
                        <div>
                            <label htmlFor='type'>Type: </label>
                            <input id='type' type='number' name='type' /> <br />    
                        </div>
                        
                        <div>
                            <label htmlFor='email'>Email: </label>
                            <input id='email' type='text' name='email' /> <br />    
                        </div>
                        
                        <div>
                            <label htmlFor='password'>Password: </label>
                            <input id='password' type='password' name='password' /> <br />    
                        </div>
                        
                        <div>
                            <label htmlFor='passconf'>Confirm Password: </label>
                            <input id='passconf' type='password' name='password_confirmation' /> <br />    
                        </div>
                        
                        <div>
                            <input type='submit' value='submit' />    
                        </div>
                    </form>
                </div>
            )
        }

        return (
            <Layout Content = {Register}>

            </Layout>
        )
    }
}

export default Register;