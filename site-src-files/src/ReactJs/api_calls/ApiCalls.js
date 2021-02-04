import axios from 'axios';

//Api call class
export const ajaxApiCall = function(){

        
    this.apiPost = (url, data) => {
        return axios.post(url, data);
    };

    this.apiGet = (url, data) => {
        return axios.get(url, data);
    };

    this.apiDelete = (url, data) => {
        return axios.delete(url, data);
    };

    this.makeApiCall = (type, url, data) => {
        
        let client = null;
        switch(type){
            case "POST":
                client = this.apiPost(url, data);
            break;
            case "DELETE":
                client = this.apiDelete(url, data);
                break;
            default:
                client = this.apiGet(url, data);
        }

        // axios.post(configData.base_url + '/user/login', userInput)
        return client;
    };
};



