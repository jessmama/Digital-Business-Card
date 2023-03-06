//import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import './index.css'

export default function App() {
    return (
        <div className='main'>
            <div className='main__section'>
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}
