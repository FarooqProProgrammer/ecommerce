import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Top from '../components/Top'
import Header from '../components/Header'

export default function Routing() {
    return (
        <BrowserRouter>
            <Top />
            <Header />
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
