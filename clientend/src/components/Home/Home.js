import React from 'react'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import Card from '../Shared/Card';
import Carosal from '../Shared/Carosal';

const Home = () => {
    return (
        <div>
            <Header />
            <Carosal />
            <Card />
            <Footer />
        </div>
    )
}
export default Home;
