import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppAdmin from './AppAdmin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppAdmin />, document.getElementById('root'));
registerServiceWorker();
