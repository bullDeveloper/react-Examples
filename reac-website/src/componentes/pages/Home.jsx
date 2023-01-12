import React from 'react';
import '../../styleSheets/App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import MainSection from '../MainSection.jsx'

function Home() {
    return (
        <>
            <MainSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;