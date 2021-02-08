import {getToken, getUserId} from '../app_functions/GetCookies';

/**
 * All auth actions
 */
const authClass = function () {
    /**
     * Checks if we have a logged in user.
     * @returns {boolean}
     */
    this.isLoggedIn = () => {
        if (getToken() && getUserId()) {
            return true;
        }
        return false;
    };
};

/**
 * @returns {boolean}
 */
export function Auth() {
    return new authClass();
};
