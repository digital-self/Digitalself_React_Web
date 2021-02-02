import React from 'react';
import { login } from '../api_calls/ApiCalls'
import { Redirect } from 'react-router-dom';

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
        login(this.state).then((a) => {
            if (a === 'error') {
                window.location =  '/login';
            } else if (a === false) {
                window.location =  '/login';
            } else {
                window.location =  '/';
            }
        });
        /*login(this.state).then((a) => {
            console.log("one", a);
            // @todo - save the access token in a session
            // @todo - check what you get to ensure tha you can redirect and to where
            // @todo - if you try to access the homepage redirect to login

            if(true) {
                console.log("two", a);
                //this.setState({returnvalue: 'login succesful'});
                window.location =  '/';
                // @todo - fix this. <Redirect to='https://google.com'  />
            }
        })

        console.log(this.state.returnvalue);
        */
    }

    changehandler = (e) => {
        const nam = e.target.name;
        const val = e.target.value;

        this.setState({[nam]: val});
    }

    render() {
        if (this.state.returnvalue === false) {
            return <Redirect to='/login' />
        } else if (this.state.returnvalue === true) {
            return <Redirect to='/home' />
        } else if (this.state.returnvalue === 'error') {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={this.changehandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={this.changehandler} />
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;