import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

import './css/antd.min.css';
import './css/style.css'

document.getElementById("loading").remove();

ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
);
