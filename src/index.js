import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './Components/App';
import Child from './Components/Child'
import Home from './Components/Home'
import Todo from './Todo/Todo'
import VehicleTracker from './Components/VehicleTracker'
import SimpleCounter from './Components/SimpleCounter'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))

const RootComponent = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Home />
                <Switch>
                    <Route path='/app' component={App}></Route>
                    <Route path='/child' component={Child}></Route>
                    <Route path='/todo' component={Todo}></Route>
                    <Route path='/vehicletracker' component={VehicleTracker}></Route>
                    <Route path='/simpleCounter' component={SimpleCounter}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./index', () => {
      ReactDOM.render(
        <React.StrictMode>
          <RootComponent />
        </React.StrictMode>,
        document.getElementById('root')
      )
    })
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();