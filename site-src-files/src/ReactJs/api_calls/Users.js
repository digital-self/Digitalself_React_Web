import {ajaxApiCall} from './ApiCalls';

export function addUser(payload, token) {
    let returnVal;
    const ajaxApiCallObject = new ajaxApiCall();
    returnVal = ajaxApiCallObject.makeApiCall("POST", '/user/add', payload)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    return returnVal;
}