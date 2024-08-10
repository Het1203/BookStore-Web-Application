import React from 'react'
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import FreeBooks from '../components/FreeBooks';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <FreeBooks />
            <Footer />
        </>
    )
}

export default Home;
