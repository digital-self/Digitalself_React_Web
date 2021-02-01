import axios from 'axios';
import configData from '../config/config.json';

export function login(userInput) {
    
    let returnVal = axios.post(configData.base_url + '/user/login', userInput)
        .then(response => {
            return response.data.success;
        })
        .catch(error => {
            return error;
        });

        return returnVal;
}

export function register(userInput) {
    axios.post(configData.base_url + '/user/register', userInput)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response.data);
        });
}