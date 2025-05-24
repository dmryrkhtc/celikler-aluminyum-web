import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import stajImage from "../pictures/staj1.jpeg";
import pexel2Image from "../pictures/pexel2.webp";


const Contact = () => {
    const [showQuoteForm, setShowQuoteForm] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const [comment, setComment] = useState("");

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [formSuccess, setFormSuccess] = useState({
        contact: false,
        quote: false,
        career: false,
        partner: false,
        feedback: false
    });

    // Form referansları
    const contactFormRef = useRef(null);
    const quoteFormRef = useRef(null);
    const careerFormRef = useRef(null);
    const partnerFormRef = useRef(null);
    const feedbackFormRef = useRef(null);

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

    const showTemporarySuccess = (type) => {
        setFormSuccess(prev => ({ ...prev, [type]: true }));
        setTimeout(() => {
            setFormSuccess(prev => ({ ...prev, [type]: false }));
        }, 3000);
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
        setSelectedRating(0);
        setComment("");
        feedbackFormRef.current.reset();
        showTemporarySuccess("feedback");
    };

    const handleSubmit = (e, formType) => {
        e.preventDefault();
        showTemporarySuccess(formType);

        switch (formType) {
            case "contact":
                contactFormRef.current.reset();
                break;
            case "quote":
                quoteFormRef.current.reset();
                setShowQuoteForm(false);
                break;
            case "career":
                careerFormRef.current.reset();
                break;
            case "partner":
                partnerFormRef.current.reset();
                break;
            default:
                break;
        }
    };

    return (
        <div className="contact-page">
            <h2>İletişim Formu</h2>
            <form ref={contactFormRef} className="contact-form-grid" onSubmit={(e) => handleSubmit(e, "contact")}>
                <div className="form-group"><label>Ad Soyad *</label><input type="text" required /></div>
                <div className="form-group"><label>Telefon *</label><input type="tel" required /></div>
                <div className="form-group"><label>Email *</label><input type="email" required /></div>
                <div className="form-group"><label>Konu *</label><input type="text" required /></div>
                <div className="form-group full-width"><label>Mesajınız *</label><textarea rows="5" required></textarea></div>
                <button type="submit" className="submit-btn">Gönder</button>
                {formSuccess.contact && <p className="success-msg">İletişim formu başarıyla gönderildi!</p>}
            </form>



            <div className="quote-section">
                <h3>Ücretsiz Fiyat Teklifi İsteyin</h3>
                <button onClick={() => setShowQuoteForm(true)}>Teklif Formunu Aç</button>

                {showQuoteForm && (
                    <div className="modal" onClick={() => setShowQuoteForm(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setShowQuoteForm(false)}>×</button>
                            <h3>Ücretsiz Keşif Formu</h3>
                            <form ref={quoteFormRef} className="quote-form-grid" onSubmit={(e) => handleSubmit(e, "quote")}>
                                <div className="form-group"><label>Ad Soyad *</label><input type="text" required /></div>
                                <div className="form-group"><label>Email *</label><input type="email" required /></div>
                                <div className="form-group"><label>Telefon *</label><input type="tel" required /></div>
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
                                        required disabled={!selectedCity}
                                    >
                                        <option value="">İlçe seçiniz</option>
                                        {districts.map(district => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group"><label>Proje Adı *</label><input type="text" required /></div>
                                <div className="form-group"><label>Proje İçeriği *</label><input type="text" required /></div>
                                <div className="form-group full-width"><label>Mesajınız *</label><textarea rows="4" required></textarea></div>
                                <button type="submit">Gönder</button>
                                {formSuccess.quote && <p className="success-msg">Teklif formu başarıyla gönderildi!</p>}
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <div className="career-form form-section">
                <img src={stajImage} alt="Kariyer" />
                <form ref={careerFormRef} onSubmit={(e) => handleSubmit(e, "career")}>
                    <h3>Bizimle Çalışmak İster misiniz?</h3>
                    <div className="form-group"><label>Ad Soyad *</label><input type="text" required /></div>
                    <div className="form-group"><label>Email *</label><input type="email" required /></div>
                    <div className="form-group"><label>Telefon *</label><input type="tel" required /></div>
                    <div className="form-group full-width"><label>Motivasyon Mektubu *</label><textarea rows="4" required></textarea></div>
                    <div className="form-group full-width"><label>Özgeçmiş Yükle *</label><input type="file" accept=".pdf,.doc,.docx" required /></div>
                    <button type="submit">Başvur</button>
                    {formSuccess.career && <p className="success-msg">Başvurunuz başarıyla gönderildi!</p>}
                </form>
            </div>

            <div className="partnership-form form-section">
                <img src={pexel2Image} alt="Ortaklık" />
                <form ref={partnerFormRef} onSubmit={(e) => handleSubmit(e, "partner")}>
                    <h3>Bizimle Ortak Olmak İster misiniz?</h3>
                    <div className="form-group"><label>Firma Adı *</label><input type="text" required /></div>
                    <div className="form-group"><label>Yetkili Kişi *</label><input type="text" required /></div>
                    <div className="form-group"><label>Email *</label><input type="email" required /></div>
                    <div className="form-group"><label>Telefon *</label><input type="tel" required /></div>
                    <div className="form-group full-width"><label>Ortaklık Talebiniz *</label><textarea rows="5" required></textarea></div>
                    <button type="submit">Başvur</button>
                    {formSuccess.partner && <p className="success-msg">Ortaklık talebiniz başarıyla gönderildi!</p>}
                </form>
            </div>

            <div className="feedback-form">
                <h3>Kullanıcı Deneyiminizi Değerlendirin</h3>
                <form ref={feedbackFormRef} onSubmit={handleFeedbackSubmit}>
                    <div className="stars-input">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span
                                key={num}
                                className={num <= selectedRating ? "active" : ""}
                                onClick={() => setSelectedRating(num)}
                            >★</span>
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
                    {formSuccess.feedback && <p className="success-msg">Yorumunuz gönderildi. Teşekkür ederiz!</p>}
                </form>
            </div>

            {/* KONUM EN ALTA TAŞINDI */}
            <div className="map-section">
                <h3>Konumumuz</h3>
                <iframe
                    title="Çelikler Alüminyum Konum"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.6127169395204!2d37.00951229999999!3d39.7258855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407954adb934ccd3%3A0x452740d63add78a9!2zR8O8bHRlcGUsIDQuIENkLiA0IEVZTMOcTCBTQU5BWcSwxLAgU8SwVEVTxLAgTk86MTgsIDU4MDIwIFNpdmFzIE1lcmtlei9TaXZhcw!5e0!3m2!1str!2str!4v1747482422802!5m2!1str!2str"
                    width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                />
            </div>
        </div>
    );
};

export default Contact;