import constant from './constant';

const token_key = ('token_' + constant.version);

function getToken() {
    let token = localStorage.getItem(token_key);

    if (token === null || typeof (token) === 'undefined') {
        return '';
    }

    return token;
}

function setToken(token) {
    localStorage.clear();

    localStorage.setItem(token_key, token);
}

export default {
    getToken: getToken,
    setToken: setToken
};
