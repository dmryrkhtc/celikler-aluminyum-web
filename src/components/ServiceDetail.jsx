import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServiceDetail.css";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData[id];
    const [activeTab, setActiveTab] = useState("genel");
    const [activeMedia, setActiveMedia] = useState("video");
    const [showModal, setShowModal] = useState(false); // 👈 modal kontrolü

    if (!service) return <p>Hizmet bulunamadı.</p>;

    return (
        <div className="service-detail-wrapper">
            <div className="service-detail-container">
                <div className="media-column">
                    <div className="media-display">
                        {activeMedia === "video" ? (
                            <video
                                className="service-video"
                                src={service.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster={service.image}
                            />
                        ) : (
                            <img src={service.image} alt={service.title} className="service-image" />
                        )}
                    </div>
                    <ul className="media-thumbnails">
                        <li>
                            <button className={activeMedia === "video" ? "active" : ""} onClick={() => setActiveMedia("video")}>🎥</button>
                        </li>
                        <li>
                            <button className={activeMedia === "image" ? "active" : ""} onClick={() => setActiveMedia("image")}>🖼️</button>
                        </li>
                    </ul>
                </div>

                <div className="content-column">
                    <div className="tabs">
                        <button className={activeTab === "genel" ? "active" : ""} onClick={() => setActiveTab("genel")}>Genel Özellikler</button>
                        <button className={activeTab === "teknik" ? "active" : ""} onClick={() => setActiveTab("teknik")}>Teknik Özellikler</button>
                    </div>

                    <div className="tab-content">
                        {activeTab === "genel" ? (
                            <>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <ul>
                                    {service.generalFeatures.map((feature, index) => (
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
                                            {Object.entries(service.technicalFeatures).map(([key, value]) => (
                                                <tr key={key}>
                                                    <td><strong>{key}</strong></td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
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
                        <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
                        <h3>Fiyat Teklifi Formu</h3>
                        <form className="quote-form">
                            <input type="text" placeholder="Adınız" required />
                            <input type="text" placeholder="Soyadınız" required />
                            <input type="email" placeholder="E-posta" required />
                            <input type="tel" placeholder="Telefon" />
                            <textarea placeholder="Proje detaylarını yazınız..." rows="4" required></textarea>
                            <button type="submit">Gönder</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceDetail;

