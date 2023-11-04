import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Top from '../components/Top'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/pages/Home'

export default function Routing() {
    return (
        <BrowserRouter>
            <Top />
            <Header />
            <Routes>
            <Route path='/' element={<Home />} />

                <Route path='/login' element={<Login />} />                
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
