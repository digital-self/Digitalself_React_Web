import axios from 'axios';
import configData from '../config/config.json';
import {getToken} from '../app_functions/GetCookies';

/**
 * Api call class
 */
export const ajaxApiCall = function () {

    /**
     * @param url
     * @param data
     * @param headers
     * @returns {Promise<AxiosResponse<any>>}
     */
    this.apiPost = (url, data = null, headers = null) => {
        return axios.post(url, data, headers);
    };

    /**
     * @param url
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    this.apiGet = (url, data, headers) => {
        return axios.get(url, data, headers);
    };

    /**
     * @param url
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    this.apiDelete = (url, data, headers) => {
        return axios.delete(url, data, headers);
    };

    /**
     * @param type
     * @param url
     * @param data
     * @param headers
     * @returns {Promise<AxiosResponse<*>>}
     */
    this.makeApiCall = (type, url, data = null) => {
        url = configData.base_url + url;
        let client = null;
        const headers = this.applyHeaderContent(data);
        switch (type) {
            case "POST":
                client = this.apiPost(url, data, headers);
                break;
            case "DELETE":
                client = this.apiDelete(url, data, headers);
                break;
            default:
                client = this.apiGet(url, data, headers);
        }
        return client;
    };

    /**
     * Set the headers for every call to the api.
     *
     * @param data
     * @returns {*}
     */
    this.applyHeaderContent = (incomingData) => {
        let data = incomingData ? incomingData : {};
        data.headers = !data.headers ? {} : data.headers;
        // set the token if present.
        data = this.applyTokenToHeader(data);
        // set the config headers.
        data = this.applyConfigHeaders(data);
        return data;
    };

    /**
     * Apply the token to the headers.
     *
     * @param data
     * @returns {*}
     */
    this.applyTokenToHeader = (data) => {
        const token = getToken();
        if (token) {
            data.headers.Authorization = `Bearer ${token}`;
        }
        return data;
    };

    /**
     * Apply the rest of the headers for the api call
     *
     * @param data
     * @returns {*}
     */
    this.applyConfigHeaders = (data) => {
        if (configData.headersContent && configData.headersContent.headers) {
            const headers = configData.headersContent.headers;
            const keys = Object.keys(headers);
            for (const key of keys) {
                data.headers[key] = headers[key];
            }
        }
        return data;
    };
};



