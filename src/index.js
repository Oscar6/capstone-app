import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/BaseLayout';
// import  { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login'
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable';
import './App.scss'

//component imports
import App from './App';
import ClientPage from './components/ClientPage';
import Register from './Register/Register'


// const store = createStore(reducer);

// const Login = Loadable({
//   loader: () => import('./views/Pages/Login'),
//   loading
// });


ReactDOM.render(
    //   <Provider>
        <BrowserRouter>
        <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/clientpage" component={ClientPage} />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
        </Switch>
        </BaseLayout>
        </BrowserRouter>,
    //   </Provider>,
      document.getElementById('root')
    )

serviceWorker.unregister();