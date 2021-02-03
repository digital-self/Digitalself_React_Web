import React from 'react';
import { login } from '../../api_calls/ApiCalls';
import Layout from '../layouts/Layout';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }
        
        login(data).then((a) => {
            
            console.log(a);
            if (a === 'error') {
                window.location =  '/login';
            } else if (a === false) {
                window.location =  '/login';
            } else if (a === true) {
                window.location =  '/';
            } else {
                console.log('an error occured');
            }
            
        });
    }

    changehandler = (e) => {
        const nam = e.target.name;
        const val = e.target.value;

        this.setState({[nam]: val});
    }

    render() {
        const Login = () => {
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" onChange = {e => this.email = e.target.value}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" onChange = {e => this.password = e.target.value}/>
                        </div>
                        <div>
                            <input type="submit" name="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )
        }

        return (
            <Layout Content = {Login}>

            </Layout>
        )
    }
}

export default Login;