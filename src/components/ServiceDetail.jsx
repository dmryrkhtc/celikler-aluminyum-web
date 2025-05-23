import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceDetail.css";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData[id];
    const [activeTab, setActiveTab] = useState("genel");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setShowModal(false);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    if (!service) return <p>Hizmet bulunamadı.</p>;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Form başarıyla gönderildi!");
    };

    return (
        <div className="service-detail-wrapper">
            <div className="service-detail-container">
                <div className="media-column">
                    <Slider {...sliderSettings} className="gallery-slider">
                        {service.gallery?.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt={`${service.title} görsel ${index + 1}`}
                                    className="slider-image"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="content-column">
                    <div className="tabs" role="tablist">
                        <button
                            role="tab"
                            aria-selected={activeTab === "genel"}
                            className={activeTab === "genel" ? "active" : ""}
                            onClick={() => setActiveTab("genel")}
                        >
                            Genel Özellikler
                        </button>
                        <button
                            role="tab"
                            aria-selected={activeTab === "teknik"}
                            className={activeTab === "teknik" ? "active" : ""}
                            onClick={() => setActiveTab("teknik")}
                        >
                            Teknik Özellikler
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === "genel" ? (
                            <>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <ul>
                                    {service.generalFeatures?.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3>Teknik Özellikler</h3>
                                {service.technicalFeatures ? (
                                    <table className="tech-specs-table">
                                        <tbody>
                                            {Object.entries(service.technicalFeatures).map(
                                                ([key, value]) => (
                                                    <tr key={key}>
                                                        <td>
                                                            <strong>{key}</strong>
                                                        </td>
                                                        <td>{value}</td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>Bu hizmetin teknik detayları yakında eklenecek.</p>
                                )}
                            </>
                        )}
                    </div>

                    <button className="quote-button" onClick={() => setShowModal(true)}>
                        Ücretsiz Fiyat Teklifi Alın
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowModal(false)}>
                            ×
                        </button>
                        <h3>Fiyat Teklifi Formu</h3>
                        <form className="quote-form" onSubmit={handleFormSubmit}>
                            <input type="text" placeholder="Adınız" required />
                            <input type="text" placeholder="Soyadınız" required />
                            <input type="email" placeholder="E-posta" required />
                            <input type="tel" placeholder="Telefon" />
                            <textarea
                                placeholder="Proje detaylarını yazınız..."
                                rows="4"
                                required
                            ></textarea>
                            <button type="submit">Gönder</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceDetail;

