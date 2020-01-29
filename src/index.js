import React from 'react';
import {render} from 'react-dom';


// import styles
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

// import components
import App from './components/App';

// import react router deps
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store, {history} from './store';
import { ConnectedRouter } from 'react-router-redux'


const router = (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>
)
render(
  router, document.getElementById('root')
)
