import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import './App.scss'
import './Styles/styles.css'
import reducers from './reducers';
//component imports
import App from './App';
import ClientPage from './components/ClientPage';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import UserDashboard from './Dashboard/UserDashboard';
import About from './components/About';
import FAQ from './components/FAQ';
import './Styles/App.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, {
  auth: {authenticated: localStorage.getItem('token')}
},
  composeEnhancers(applyMiddleware(reduxThunk)));



ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
        <BaseLayout>
        <Switch>
          <Route  exact path="/" component={App}/>
          <Route path="/clientpage" component={ClientPage} />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/userdashboard" component={ UserDashboard } />
          <Route path="/about" component={ About } />
          <Route path="/faq" component={ FAQ } />
        </Switch>
        </BaseLayout>
        </BrowserRouter>,
      </Provider>,
      document.getElementById('root')
    )

serviceWorker.unregister();