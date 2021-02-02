import axios from 'axios';
import configData from '../config/config.json';

//Api call class
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

//Function to handle login and signup responses
function authResponseHandler(result, action) {
    if (!result.success) {
        return false;
    } else {
        if (action === 'login') {
            localStorage.setItem('token', result.data.access_token);
            localStorage.setItem('user_id', result.data.user.id);
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

export function getPosts(token) {
    let headers;
    let returnVal;

    if (token) {
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${token}`
        }
    }

    const ajaxApiCallObject = new ajaxApiCall();
    
    if(headers) {
        returnVal  = ajaxApiCallObject.makeApiCall("GET", configData.base_url + '/post', headers)
        .then(response => {
            if(!response.data.data.posts.data) {
                return false;
            } else {
                return response.data.data.posts.data;
            }
        })
        .catch(error => {
            return 'error';
        });
    } 
    
    return returnVal;
}