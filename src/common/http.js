import reqwest from 'reqwest';
import {message} from 'antd';
import md5 from 'blueimp-md5';

import constant from './constant';
import storage from './storage';

function request(config) {
    config.data.appId = constant.appId;
    config.data.token = storage.getToken();
    config.data.platform = constant.platform;
    config.data.version = constant.version;
    config.data.timestamp = Math.round(new Date().getTime() / 1000);

    let sign = '';
    var sdic = Object.keys(config.data).sort();
    for (let ki in sdic) {
        sign += sdic[ki];
        sign += config.data[sdic[ki]];
    }
    config.data.sign = md5(sign);

    reqwest({
        url: constant.host + config.url,
        type: 'json',
        method: 'POST',
        crossOrigin: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(config.data),
        success: function (response) {
            if (response.code === 200) {
                config.success(response.data);
            } else {
                message.error(response.message);
            }
        },
        error: function () {

        },
        complete: function () {
            config.complete();
        }
    });
}

export default {
    request: request
};
