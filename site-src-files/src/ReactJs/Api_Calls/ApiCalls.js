import axios from 'axios';
import configData from '../config/config.json';

export function login(userInput) {
    axios.post(configData.base_url + '/user/login', userInput)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}