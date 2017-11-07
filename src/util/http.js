import reqwest from 'reqwest';

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
            'app_id': constant.app_id,
            'token': storage.getToken(),
            'platform': constant.platform,
            'version': constant.version
        },
        data: JSON.stringify(config.data),
        success: function (response) {
            if (response.code === 200) {
                config.success(response.data);
            } else {
                config.error(response);
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
