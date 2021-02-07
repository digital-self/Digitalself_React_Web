import {ajaxApiCall} from './ApiCalls';
import { loggger } from '../app_functions/Loggger';

//Save a post to a user's profile
export function addMyPosts(userId, postId) {
    let returnVal;
    let payload = null;

    const ajaxApiCallObject = new ajaxApiCall();

    returnVal = ajaxApiCallObject.makeApiCall(
        "POST", `/my-posts/add/${userId}/${postId}`, payload)
        .then(response => {
            if (!response.data.success) {
                return false;
            } else {
                return response.data.success;
            }

        })
        .catch(error => {
            return 'error';
        });
    return returnVal;
}

//Get a user's saved posts
export function getMyposts(userId) {
    let returnVal;
    const ajaxApiCallObject = new ajaxApiCall();
    returnVal = ajaxApiCallObject.makeApiCall("GET", `/my-posts/${userId}/0/6`, {})
        .then(response => {
            return response.data.data.my_posts
        })
        .catch(error => {
            loggger("");
            console.log('error', 'error');
            return 'error';
        });
    return returnVal;
}

//delete a post a user saved
export function deleteSavedPost(userId, postId) {
    let returnVal;
    const ajaxApiCallObject = new ajaxApiCall();

    returnVal = ajaxApiCallObject.makeApiCall(
        "DELETE", `/my-posts/${userId}/${postId}`, {})
        .then(response => {


            if (!response.data.success) {
                return false;
            } else {
                return response.data.success;
            }


        })
        .catch(error => {
            console.log(error);
        });

    return returnVal;
}

//Get all  posts
export function getPosts() {

    let returnVal;

    const ajaxApiCallObject = new ajaxApiCall();

    returnVal = ajaxApiCallObject.makeApiCall("GET", '/post', {})
        .then(response => {
            if (!response.data.data.posts.data) {
                return false;
            } else {
                return response.data.data.posts.data;
            }

        })
        .catch(error => {
            return 'error';
        });

    return returnVal;
}

//Add Post
export function addPost(payload, token) {
    let returnVal;
    const ajaxApiCallObject = new ajaxApiCall();
    returnVal = ajaxApiCallObject.makeApiCall("POST", '/post', payload)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    return returnVal;
}
