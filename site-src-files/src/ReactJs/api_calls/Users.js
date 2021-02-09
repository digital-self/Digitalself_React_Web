import {ajaxApiCall} from './ApiCalls';

//Add user
export function addUser(payload) {
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