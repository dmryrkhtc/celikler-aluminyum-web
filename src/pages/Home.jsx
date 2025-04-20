import React from "react";
import Gallery from "../components/Gallery";
import About from "../components/About"; // Hakkımızda component'ini ekledik
import Services from "../components/Services"; // Hizmetlerimiz component'ini ekledik

const Home = () => {
    return (
        <div>
            <Gallery />
            <About />
            <Services />
        </div>
    );
};

export default Home;
