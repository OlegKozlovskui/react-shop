import React from 'react';
import ReactDom from 'react-dom';
import './main.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Layout from './containers/layout/layout';
import Phones from './containers/phones/phones';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDom.render(
  <Provider store={store}>
    <Router history={ history }>
      <Switch>
        <Layout>
          <Route path="/" component={Phones}></Route>
        </Layout>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);