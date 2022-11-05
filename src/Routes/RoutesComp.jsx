import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllItems from '../Components/AllItems/AllItems'
import Electronics from '../Components/Electronics/Electronics'
import Jewelery from '../Components/Jewelery/Jewelery'
import MensClothing from '../Components/MenClothing/MensClothing'
import WomensClothing from '../Components/WomenClothing/WomensClothing'

function RoutesComp() {
    return (
        <Routes>

            <Route path='/' element={<AllItems />} />

            <Route exact path='/electronics' element={<Electronics />} />

            <Route exact path='/jewelery' element={<Jewelery />} />

            <Route exact path='/mensclothing' element={<MensClothing />} />

            <Route exact path='/womensclothing' element={<WomensClothing />} />

        </Routes>
    )
}

export default RoutesComp