import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AppLayout = () => {
return (
    <div>
        <div className="grid-background"></div>
        <main className='min-h-screen  mx-auto px-8'>
            <Header />
            <Outlet />
        </main>
        <Footer />
    </div>
)
}

export default AppLayout