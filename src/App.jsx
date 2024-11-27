import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { ProductDisplay } from './Components/ProductDisplay'
import Cart from './Components/Cart'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductDisplay/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
