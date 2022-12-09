import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './translation/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // if comments are removed (in development) componentDidMount() gets fired twice and some buttons don't work as expected.

    // TODO: Remove in production
    //<React.StrictMode>
        <App/>
    //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
