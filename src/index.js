import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Child from './Child'
import Home from './Home'
import Todo from './Todo/Todo'
import AnotherChild from './AnotherChild'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))

const RouterWrapper = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Home />
                <Switch>
                    <Route path='/app' component={App}></Route>
                    <Route path='/child' component={Child}></Route>
                    <Route path='/todo' component={Todo}></Route>
                    <Route path='/anotherchild' component={AnotherChild}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <RouterWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      )
    })
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();