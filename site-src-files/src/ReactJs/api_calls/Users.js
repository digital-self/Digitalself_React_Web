import {ajaxApiCall} from './ApiCalls';
import configData from '../config/config.json';

export function addUser(payload) {
    let ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall("POST", configData.base_local_url + '/users/add', payload)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    })

    return returnVal;
}