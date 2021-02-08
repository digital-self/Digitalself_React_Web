import Cookies from 'js-cookie';

<<<<<<< HEAD
export function getUserId () {
    console.log(Cookies.get('userid'));
    return Cookies.get('userid');
}

export function getToken () {
    return Cookies.get('token');
}
=======
export function getUserId() {
    return Cookies.get('userid') || [];
}

export function getToken() {
    return Cookies.get('token') || "";
}
>>>>>>> f4fd94965c1206e0d148883d11b307175f591b2e
