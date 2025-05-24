import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../pictures/b.jpg";

const Hero = () => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="hero-overlay">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>
                            Türkiye'nin <strong>Alüminyum</strong> Çözümü
                        </h1>
                        <p>
                            <strong>Çelikler Alüminyum</strong> olarak kaliteli hizmet ve müşteri memnuniyetini ön planda tutuyoruz.
                            Modern çözümlerimizle sektörde fark yaratıyoruz.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/services" className="btn">Ücretsiz Keşif</Link>
                            <Link to="/contact" className="btn outline">Projeni Başlat</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

