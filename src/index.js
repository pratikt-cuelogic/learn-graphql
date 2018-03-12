import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as stores from './stores/stores';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
