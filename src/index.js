import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Redux/store';
// import { changeName } from './Redux/actions';
// import { changeNumber } from './Redux/actions';
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ;
  </React.StrictMode>,
  document.getElementById('root'),
);
