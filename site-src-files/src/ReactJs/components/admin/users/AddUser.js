import React from 'react';
import { addUser } from '../../../api_calls/Users';
import { getToken } from '../../../app_functions/GetCookies';
import Layout from '../../layouts/Layout';

class AddUser extends React.Component {
    addUser = (e) => {
        e.preventDefault();

        const data = {
            first_name: this.first_name,
            last_name: this.last_name,
            type: this.type,
            email: this.email,
            mobile_phone: this.mobile_phone,
            image: this.image
        }

        addUser(data, getToken());
    }
    
    render() {
        const Content = () => {
            return (
                <div>
                    <form onSubmit={this.addUser}>
                        <div>
                            <label htmlFor="fname">First Name: </label>
                            <input id="fname" type="text" name="first_name" onChange = {e => this.first_name = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name: </label>
                            <input id="lname" type="text" name="last_name" onChange = {e => this.last_name = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="type">Type: </label>
                            <input id="type" type="number" name="type" onChange = {e => this.type = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input id="email" type="email" name="email" onChange = {e => this.email = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number: </label>
                            <input id="phone" type="text" name="mobile_phone" onChange = {e => this.mobile_phone = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="image">Image: </label>
                            <input id="image" type="text" name="image" onChange = {e => this.image = e.target.value} />
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
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

export default AddUser;