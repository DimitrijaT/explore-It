import React, { useRef, useState, useEffect } from 'react';
import { MapPage } from './pages/MapPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage';
import { Navigation } from './pages/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './pages/Footer';
import { Cookies } from 'react-cookie';

export function App() {
    const inputRef = useRef();
    const [lang, setLang] = useState('mk');
    const cookies = new Cookies();

    useEffect(() => {
        setLang(cookies.get('lang'));
    }, []);

    function translateTo(desiredLang) {
        setLang(desiredLang);
        cookies.set('lang', desiredLang, { maxAge: 3600 });
    }

    return (
        <BrowserRouter>
            <Navigation ref={inputRef} />
            <Routes>
                <Route path="/">
                    <Route index element={<MapPage props={lang} />} />
                    <Route path="about" element={<About props={lang} />} />
                    <Route path="contact" element={<Contact props={lang} />} />
                    <Route path="*" element={<NoPage props={lang} />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}