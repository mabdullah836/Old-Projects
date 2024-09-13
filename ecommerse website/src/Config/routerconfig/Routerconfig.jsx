import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import SingleProduct from '../../pages/singleproduct.jsx/SingleProduct'
import ResponsiveAppBar from '../../Components/Navbar'

const Routerconfig = () => {
  return (
      <BrowserRouter>
       <ResponsiveAppBar/>
         <Routes>
            <Route path='' element={<Home/>}  />
            <Route path='singleproduct/:id' element={<SingleProduct/>}  />
         </Routes>
      </BrowserRouter>
  )
}

export default Routerconfig