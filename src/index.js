import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

import 'antd/dist/antd.min.css';
import '../public/css/style.css'

document.getElementById("loading").remove();

ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
);
