import axios from 'axios';

//Api call class
export const ajaxApiCall = function(){

        
    this.apiPost = (url, data = null, headers = null) => {
        return axios.post(url, data, headers);
    };

    this.apiGet = (url, data) => {
        return axios.get(url, data);
    };

    this.apiDelete = (url, data) => {
        return axios.delete(url, data);
    };

    this.makeApiCall = (type, url, data = null, headers = null) => {
        
        let client = null;
        switch(type){
            case "POST":
                client = this.apiPost(url, data, headers);
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



