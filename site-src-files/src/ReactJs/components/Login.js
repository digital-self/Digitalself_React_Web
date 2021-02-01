import React from 'react';
import { login } from '../Api_Calls/ApiCalls'

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
        login(this.state);
    }

    changehandler = (e) => {
        const nam = e.target.name;
        const val = e.target.value;

        this.setState({[nam]: val});
    }

    render() {
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