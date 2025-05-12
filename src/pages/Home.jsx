import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Gallery />
            <Services />
        </div>
    );
};

export default Home;
