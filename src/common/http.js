import reqwest from 'reqwest';
import {message} from 'antd';

import constant from './constant';
import storage from './storage';

function request(config) {
    reqwest({
        url: constant.host + config.url,
        type: 'json',
        method: 'POST',
        crossOrigin: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'appId': constant.appId,
            'token': storage.getToken(),
            'platform': constant.platform,
            'version': constant.version
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
