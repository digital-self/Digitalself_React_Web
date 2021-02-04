import configData from '../config/config.json';
import { ajaxApiCall } from './ApiCalls';

//Save a post to a user's profile
export function addMyPosts(userId, postId, token) {
    let headers = configData.headers;
    let returnVal;

    if (token) {
        headers.Authorization = `Basic ${token}`;

        const ajaxApiCallObject = new ajaxApiCall();

        returnVal  = ajaxApiCallObject.makeApiCall("POST", configData.base_url + `/my-posts/add/${userId}/${postId}`, headers)
        .then(response => {
            if(!response.data.success) {
                return false;
            } else {
                return response.data.success;
            }
            
        })
        .catch(error => {
            return 'error';
        });
    }
    return returnVal;
}

//Get a user's saved posts
export function getMyposts(userId, token) {
    let headers = configData.headers;
    let returnVal;

    if (token) {
        headers.Authorization = `Basic ${token}`;    

        const ajaxApiCallObject = new ajaxApiCall();
        returnVal = ajaxApiCallObject.makeApiCall("GET", configData.base_url + `/my-posts/${userId}/0/6`, headers)
        .then(response => {
            let responseArray = response.data.data.my_posts;
            let finalArray = [];
            for(let i = 0; i < responseArray.length; i++) {
                finalArray.push(responseArray[i][0]);
            }

            return finalArray;
        })
        .catch(error => {
            return 'error';
        })
    }
    

    return returnVal;
}

//delete a post a user saved
export function deletePost(userId, token, postId) {
    let headers = configData.headers;
    let returnVal;

    if (token) {
        headers.Authorization = `Basic ${token}`;

        const ajaxApiCallObject = new ajaxApiCall();

        returnVal  = ajaxApiCallObject.makeApiCall("DELETE", configData.base_url + `/my-posts/${userId}/${postId}`, headers)
        .then(response => {
            console.log(response);
            /*
            if(!response.data.success) {
                return false;
            } else {
                return response.data.success;
            }
            */
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    return returnVal;
}

//Get all  posts
export function getPosts(token) {
    let headers = configData.headers;
    let returnVal;

    if (token) {
        headers.Authorization = `Basic ${token}`;

        const ajaxApiCallObject = new ajaxApiCall();

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

//Add Post
export function addPost(data) {
    const ajaxApiCallObject = new ajaxApiCall();
    let returnVal = ajaxApiCallObject.makeApiCall("POST", configData.base_url + '/post', data)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })

    return returnVal;
}