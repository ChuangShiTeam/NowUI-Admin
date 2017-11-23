import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

import constant from './common/constant';
import util from './common/util';

import './css/antd.min.css';
import './css/style.css'

document.getElementById("loading").remove();

util.setTitle(constant.name + '总控后台');

ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
);
