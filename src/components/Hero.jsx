import React from "react";
import "./Hero.css";
import heroImage from "../pictures/b.webp";

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
                            <button className="btn">Ücretsiz Keşif</button>
                            <button className="btn outline">Projeni Başlat</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/images/ornek.jpeg" alt="Çelikler Alüminyum" />
                    </div>
                </div>

            </div>

        </section >
    );
};

export default Hero;
