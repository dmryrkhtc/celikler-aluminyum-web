// src/components/Contact.jsx
import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
    const [showQuoteForm, setShowQuoteForm] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const [comment, setComment] = useState("");

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");

    // İl ve ilçe verilerini API'den çek
    useEffect(() => {
        fetch("https://turkiyeapi.dev/api/v1/provinces")
            .then((res) => res.json())
            .then((data) => {
                const cityList = data.data.map(item => ({
                    name: item.name,
                    districts: item.districts.map(d => d.name)
                }));
                setCities(cityList);
            })
            .catch(err => console.error("İl ve ilçe verisi alınamadı:", err));
    }, []);

    const handleCityChange = (e) => {
        const selected = e.target.value;
        setSelectedCity(selected);
        const found = cities.find(c => c.name === selected);
        setDistricts(found ? found.districts : []);
        setSelectedDistrict("");
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (selectedRating === 0) {
            alert("Lütfen bir puan verin.");
            return;
        }
        if (comment.trim() === "") {
            alert("Lütfen bir yorum yazın.");
            return;
        }

        setFeedbackSent(true);
        setTimeout(() => setFeedbackSent(false), 3000);
        setSelectedRating(0);
        setComment("");
    };

    return (
        <div className="contact-page">
            <h2>İletişim Formu</h2>
            <form className="contact-form-grid">
                <div className="form-group">
                    <label>Ad Soyad *</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Telefon *</label>
                    <input type="tel" required />
                </div>
                <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required />
                </div>
                <div className="form-group">
                    <label>Konu *</label>
                    <input type="text" required />
                </div>
                <div className="form-group full-width">
                    <label>Mesajınız *</label>
                    <textarea rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Gönder</button>
            </form>

            <div className="map-section">
                <h3>Konumumuz</h3>
                <iframe
                    title="Çelikler Alüminyum Konum"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.6127169395204!2d37.00951229999999!3d39.7258855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407954adb934ccd3%3A0x452740d63add78a9!2zR8O8bHRlcGUsIDQuIENkLiA0IEVZTMOcTCBTQU5BWcSwxLAgU8SwVEVTxLAgTk86MTgsIDU4MDIwIFNpdmFzIE1lcmtlei9TaXZhcw!5e0!3m2!1str!2str!4v1747482422802!5m2!1str!2str"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>

            <div className="feedback-form">
                <h3>Kullanıcı Deneyiminizi Değerlendirin</h3>
                <form onSubmit={handleFeedbackSubmit}>
                    <div className="stars-input">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span
                                key={num}
                                className={num <= selectedRating ? "active" : ""}
                                onClick={() => setSelectedRating(num)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <textarea
                        placeholder="Yorumunuzu yazın..."
                        rows="4"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Gönder</button>
                    {feedbackSent && <p className="feedback-success">Yorumunuz gönderildi. Teşekkür ederiz!</p>}
                </form>
            </div>

            <div className="quote-section">
                <h3>Ücretsiz Fiyat Teklifi İsteyin</h3>
                <button onClick={() => setShowQuoteForm(true)}>Teklif Formunu Aç</button>

                {showQuoteForm && (
                    <div className="modal" onClick={() => setShowQuoteForm(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setShowQuoteForm(false)}>×</button>
                            <h3>Ücretsiz Keşif Formu</h3>
                            <form className="quote-form-grid">
                                <div className="form-group">
                                    <label>Ad Soyad *</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Telefon *</label>
                                    <input type="tel" required />
                                </div>
                                <div className="form-group">
                                    <label>İl *</label>
                                    <select value={selectedCity} onChange={handleCityChange} required>
                                        <option value="">İl seçiniz</option>
                                        {cities.map(city => (
                                            <option key={city.name} value={city.name}>{city.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>İlçe *</label>
                                    <select
                                        value={selectedDistrict}
                                        onChange={(e) => setSelectedDistrict(e.target.value)}
                                        required
                                        disabled={!selectedCity}
                                    >
                                        <option value="">İlçe seçiniz</option>
                                        {districts.map(district => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Proje Adı *</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Proje İçeriği *</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>Mesajınız *</label>
                                    <textarea rows="4" required></textarea>
                                </div>
                                <button type="submit">Gönder</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;