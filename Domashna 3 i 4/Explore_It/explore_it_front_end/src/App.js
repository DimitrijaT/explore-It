import React from 'react';
import { MapPage } from './pages/MapPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage';
import { Navigation } from './pages/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './pages/Footer';

export function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<MapPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage/>} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}