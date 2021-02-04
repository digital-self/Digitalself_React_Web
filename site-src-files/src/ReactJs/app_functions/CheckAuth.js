import Cookies from 'js-cookie';

export function checkAuth() {
    let authState;
    if(!(Cookies.get('token') && Cookies.get('userid'))) {
        authState = false;
    } else {
        authState = true;
    }

    return authState;
}