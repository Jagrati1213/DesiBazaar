import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { auth } from './firebase';
import { setUser } from './Store/AuthReducer';

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    store.dispatch(setUser(user));
  } else {
    // User is signed out.
    store.dispatch(setUser(null));
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);