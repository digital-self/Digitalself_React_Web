import configData from '../config/config.json';
import Cookies from 'js-cookie';
import { ajaxApiCall } from './ApiCalls'

//Function to handle login and signup responses
function authResponseHandler(result, action) {
    if (!result.success) {
        return false;
    } else {
        if (action === 'login') {
            Cookies.set("token", result.data.access_token);
            Cookies.set("userid", result.data.user.id);
        }
        return true;
    }
}

export function login(userInput) {
    let action = 'login';
    const ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall("POST", configData.base_url + '/user/login', userInput)
    .then(response => {
        authResponseHandler(response.data, action);
    })
    .catch(error => {
        return 'error';
    });    

    return returnVal;
};

export function register(userInput) {
    let action = null;
    const ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall("POST",configData.base_url + '/user/register', userInput)
    .then(response => {
        authResponseHandler(response.data, action);
    })
    .catch(error => {
        return 'error';
    });

    return returnVal;
}