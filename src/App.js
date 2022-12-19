import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { BasketPage } from './pages/BasketPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/basket' element={<BasketPage />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
};
