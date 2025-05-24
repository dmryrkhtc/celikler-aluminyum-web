import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import dukkanImage from "../pictures/dukkan.jpg";

const AboutSummary = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    };

    return (
        <section className="about summary">
            <div className="container">
                <div className="image-container">
                    <img src={dukkanImage} alt="Çelikler Alüminyum Hakkımızda" />
                </div>

                <div className="text-container">
                    <h2>Hakkımızda</h2>
                    <p>
                        Biz, kaliteli hizmet anlayışını benimsemiş ve müşteri memnuniyetine odaklanmış bir ekip olarak, sektörümüzdeki en yeni gelişmeleri yakından takip ediyor ve bu doğrultuda çözümler üretiyoruz. Amacımız, her zaman müşteri odaklı düşünmek ve yüksek standartlarda hizmet sunmaktır.

                    </p>
                    <button className="btn" onClick={handleClick}>Daha Fazlası</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
