import axios from 'axios';
import configData from '../config/config.json';

const ajaxApiCall = function(){

        
    this.apiPost = (url, data) => {
        return axios.post(url, data);
    };

    this.apiGet = (url, data) => {
        return axios.get(url, data);
    };

    this.makeApiCall = (type, url, data) => {
        
        let client = null;
        switch(type){
            case "POST":
                client = this.apiPost(url, data);
            break;
            default:
                client = this.apiGet(url, data);
        }

        // axios.post(configData.base_url + '/user/login', userInput)
        return client;
    };
};

export function login(userInput) {

    const ajaxApiCallObject = new ajaxApiCall();

    let returnVal = ajaxApiCallObject.makeApiCall("POST", configData.base_url + '/user/login', userInput)
    .then(response => {
        if (!response.data.success) {
            return false;
        } else {
            localStorage.setItem('token', response.data.data.access_token);
            return true;
        }
    })
    .catch(error => {
        return 'error';
    });    

    return returnVal;
};

export function register(userInput) {
    const ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall("POST",configData.base_url + '/user/register', userInput)
    .then(response => {
        if (!response.data.success) {
            return false;
        } else {
            return true;
        }
    })
    .catch(error => {
        return 'error';
    });

    return returnVal;
}
