import React from 'react';
import { register } from '../../api_calls/Authentication';
import Layout from '../layouts/Layout';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const data = {
            first_name: this.first_name,
            last_name: this.last_name,
            phoneNumber: this.phoneNumber,
            type: this.type,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
        }
        
        register(data).then((a) => {
            
            if (a === 'error') {
                window.location =  '/register';
            } else if (a === false) {
                window.location =  '/register';
            } else if (a === true) {
                window.location =  '/login';
            } else {
                console.log('an error occurred');
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
                            <input id='fname' type='text' name='first_name' onChange = {e => this.first_name = e.target.value}/>
                        </div>
                        <div>
                            <label htmlFor='lname'>Last Name: </label>
                            <input id='lname' type='text' name='last_name' onChange = {e => this.last_name = e.target.value}/>
                        </div>
                        
                        <div>

                        </div>
                        <label htmlFor='phone'>Phone Number: </label>
                        <input id='phone' type='text' name='phoneNumber' onChange = {e => this.phoneNumber = e.target.value}/>
                        <div>
                            <label htmlFor='type'>Type: </label>
                            <input id='type' type='number' name='type' onChange = {e => this.type = e.target.value}/>
                        </div>
                        
                        <div>
                            <label htmlFor='email'>Email: </label>
                            <input id='email' type='text' name='email' onChange = {e => this.email = e.target.value}/>
                        </div>
                        
                        <div>
                            <label htmlFor='password'>Password: </label>
                            <input id='password' type='password' name='password' onChange = {e => this.password = e.target.value}/>
                        </div>
                        
                        <div>
                            <label htmlFor='passconf'>Confirm Password: </label>
                            <input id='passconf' type='password' name='password_confirmation' onChange = {e => this.password_confirmation = e.target.value}/>
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