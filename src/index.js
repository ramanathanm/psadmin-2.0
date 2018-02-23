import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import configureStore from './configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();