import React from "react";
import Gallery from "../components/Gallery";
import About from "../components/About"; // Hakkımızda component'ini ekledik
import Services from "../components/Services"; // Hizmetlerimiz component'ini ekledik

const Home = () => {
    return (
        <div>
            <Gallery />  {/* Mevcut Gallery bölümünü bırakıyoruz */}
            <About />    {/* Hakkımızda kısmı */}
            <Services /> {/* Hizmetlerimiz kısmı */}
        </div>
    );
};

export default Home;
