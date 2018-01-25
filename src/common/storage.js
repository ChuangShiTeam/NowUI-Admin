import constant from './constant';

const token_key = ('token_' + constant.version);

function getToken() {
    let token = localStorage.getItem(token_key);

    if (token === null || typeof (token) === 'undefined') {
        return 'vjYUoyEmyZo2r7FW+iZ3sbtNCkYrKKLSzQJU7JLG2hH97BeP2+Gk72Hdd9e+qRgA4hePuuGPiTsn9q435nWD5D8+7e0Yosk/FE/M3r+W6GA=';
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
