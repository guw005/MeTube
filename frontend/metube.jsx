import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout, fetchUser } from './util/session_api_util';
import { login } from "./actions/session_actions";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    // window.signup = signup;
    window.login = login;
    // window.logout = logout;
    // window.fetchUser = fetchUser;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
})