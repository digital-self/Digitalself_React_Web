import React from 'react';
import { register } from '../api_calls/ApiCalls';

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
        
        register(this.state);
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
                        <label htmlFor='fname'>First Name: </label>
                        <input id='fname' type='text' name='first_name' onChange={this.changehandler}/>
                    </div>
                    <div>
                        <label htmlFor='lname'>Last Name: </label>
                        <input id='lname' type='text' name='last_name' onChange={this.changehandler}/> <br />
                    </div>
                    
                    <div>

                    </div>
                    <label htmlFor='phone'>Phone Number: </label>
                    <input id='phone' type='text' name='phoneNumber' onChange={this.changehandler}/> <br />
                    <div>
                        <label htmlFor='type'>Type: </label>
                        <input id='type' type='number' name='type' onChange={this.changehandler}/> <br />    
                    </div>
                    
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input id='email' type='text' name='email' onChange={this.changehandler}/> <br />    
                    </div>
                    
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input id='password' type='password' name='password' onChange={this.changehandler}/> <br />    
                    </div>
                    
                    <div>
                        <label htmlFor='passconf'>Confirm Password: </label>
                        <input id='passconf' type='password' name='password_confirmation' onChange={this.changehandler}/> <br />    
                    </div>
                    
                    <div>
                        <input type='submit' value='submit' />    
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;