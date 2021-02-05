import Cookies from 'js-cookie';

export function getUserId () {
    console.log(Cookies.get('userid'));
    return Cookies.get('userid');
}

export function getToken () {
    return Cookies.get('token');
}