import Cookies from 'js-cookie';

export function getUserId() {
    return Cookies.get('userid') || [];
}

export function getToken() {
    return Cookies.get('token') || "";
}
