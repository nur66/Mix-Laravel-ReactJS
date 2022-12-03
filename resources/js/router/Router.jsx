import React from 'react';
import { Route, Routes } from 'react-router-dom';

import IndexProduct from '../components/products/Index';
import NewProduct from '../components/products/New';
import NotFound from '../components/NotFound';
import EditProduct from '../components/products/Edit';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <IndexProduct /> } />
                <Route path="/product/new" element={ <NewProduct /> } />
                {/* <Route path="/product/new" element={ <NewProduct /> } /> */}
                <Route path="/product/edit/:id" element={ <EditProduct /> } />
            </Routes>
        </div>
    )
}

export default Router