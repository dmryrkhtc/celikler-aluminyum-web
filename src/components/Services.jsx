import React from "react";
import "./Services.css";
import img1 from "../pictures/service1.jpg";
import img2 from "../pictures/service2.jpg";
import img3 from "../pictures/service3.jpg";

const servicesData = [
    {
        title: "PVC Pencere ve Kapı Sistemleri",
        image: img1,
        description:
            "Dünya standartlarında üstün teknoloji ile üretilen PVC sistemleri, maksimum ses ve ısı yalıtımı sağlar.",
    },
    {
        title: "PVC Sürme Sistemleri",
        image: img2,
        description:
            "İç ve dış mekanlarda şıklığı ve fonksiyonelliği bir arada sunan PVC sürme sistemlerimizle manzaranızı bölmeyin.",
    },
    {
        title: "Kepenk ve Panjur Sistemleri",
        image: img3,
        description:
            "Yalıtım ve estetik desteği bir arada sunan panjur ve kepenk sistemleri ile mekanlara değer katın.",
    },
];

const Services = () => {
    return (
        <section className="services">
            <h2>Hizmetlerimiz</h2>
            <div className="service-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.title} />
                        <div className="service-title-bar">{service.title}</div>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
