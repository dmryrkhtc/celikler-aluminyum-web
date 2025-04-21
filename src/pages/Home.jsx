import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import Gallery from "../components/Gallery";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>

            <Header />
            <Hero />
            <About />
            <Gallery />
            <Services />
            <Footer />



        </div>
    );
};

export default Home;
