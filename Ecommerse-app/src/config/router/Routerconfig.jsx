import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../../pages/Products'
import SingleProduct from '../../pages/SingleProduct'
import Navbar from '../../components/navbar/Navbar'

const Routerconfig = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route  path="/" element={<Products />}/ >
        <Route  path="singleProduct/:id" element={<SingleProduct />}/ >

        
       </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig