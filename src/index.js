import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
    ;
  </React.StrictMode>,
  document.getElementById('root'),
);
