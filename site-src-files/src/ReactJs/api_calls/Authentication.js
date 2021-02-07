import configData from '../config/config.json';
import Cookies from 'js-cookie';
import {ajaxApiCall} from './ApiCalls';

/*
//Function to handle login and signup responses
function authResponseHandler(result, action) {
    if (!result.success) {
        //return false;
        return result.success;
    } else {
        if (action === 'login') {
            Cookies.set("token", result.data.access_token);
            Cookies.set("userid", result.data.user.id);
        }
        //return true;
        return result.success;
    }
}
*/

/**
 * @param userInput
 * @returns {Promise<AxiosResponse<*> | void>}
 */
export function login(userInput) {
    const ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall(
        "POST", configData.base_url + '/user/login', userInput)
        .then(response => {
            if (!response.data.success) {
                return response.data.success;
            } else {
                Cookies.set("token", response.data.data.access_token);
                Cookies.set("userid", response.data.data.user.id);
                return response.data.success;
            }
            //authResponseHandler(response.data, action);
        })
        .catch(error => {
            //return 'error';
            console.log(error);
        });

    return returnVal;
};

/**
 * @param userInput
 * @returns {Promise<AxiosResponse<*> | string>}
 */
export function register(userInput) {
    const ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall("POST", configData.base_url + '/user/register', userInput)
        .then(response => {
            if (!response.data.success) {
                return response.data.success;
            } else {
                return response.data.success;
            }
            //authResponseHandler(response.data, action);
        })
        .catch(error => {
            return 'error';
        });

    return returnVal;
}
