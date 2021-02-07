import Cookies from 'js-cookie';

export function getUserId() {
    return Cookies.get('userid') || null;
}

export function getToken() {
    return Cookies.get('token') || "";
}
