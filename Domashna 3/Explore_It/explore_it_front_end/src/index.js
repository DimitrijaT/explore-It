import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Navigation} from './pages/Navigation'
import reportWebVitals from './reportWebVitals';
import './translation/i18n'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MapPage} from "./pages/MapPage";
import {NoPage} from "./pages/NoPage";
import {Footer} from "./pages/Footer";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // if comments are removed (in development) componentDidMount() gets fired twice and some buttons don't work as expected.

    // TODO: Remove in production
    //<React.StrictMode>

    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/">
                <Route index element={<MapPage />}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage />}/>
            </Route>
        </Routes>
        <Footer />
    </BrowserRouter>

    //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
