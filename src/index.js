import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/BaseLayout';
// import  { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//component imports
import App from './App';
import ClientPage from './components/ClientPage';


// const store = createStore(reducer);

ReactDOM.render(
    //   <Provider>
        <BrowserRouter>
        <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/clientpage" component={ClientPage} />
        </Switch>
        </BaseLayout>
        </BrowserRouter>,
    //   </Provider>,
      document.getElementById('root')
    )

serviceWorker.unregister();