import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-about">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Türkiye'nin Alüminyum Çözümü</h1>
                    <p>
                        Çelikler Alüminyum olarak kaliteli hizmet ve müşteri memnuniyetini
                        ön planda tutuyoruz. Modern çözümlerimizle sektörde fark yaratıyoruz.
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
        </section>
    );
};

export default Hero;

