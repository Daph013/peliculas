import React from 'react'
import Inicio from './pages/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TendenciasTv from './pages/TendenciasTv'
import TendenciasPel from './pages/TendenciasPel'
import Categorias from './pages/Categorias'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/inicio" element={<Inicio/>} />
    <Route path="/" element={<Inicio/>} />
    <Route path="/tendenciastv" element={<TendenciasTv/>} />
    <Route path="/tendenciaspel" element={<TendenciasPel/>} />
    <Route path="/Categorias/:id/:tipo" element={<Categorias/>} />



    </Routes>
    <Footer/>
    </BrowserRouter>
    </>

  )
}

export default App