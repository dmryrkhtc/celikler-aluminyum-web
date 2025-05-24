import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>İletişim</h4>
                    <p>4. Cd. 4 EYLÜL SANAYİİ SİTESİ NO:18 Gültepe 58020 Sivas Merkez/Sivas</p>
                    <p>Nuri ÇELİK Tel: <a href="tel:05364505458">536 450 54 58</a></p>
                    <p>Nuri ÇELİK Tel2: 552 238 31 93</p>
                    <p>Email: <a href="mailto:nuricelik@hotmail.com">nuricelik@hotmail.com</a></p>
                </div>

                <div className="footer-section">
                    <h4>Hızlı Menü</h4>
                    <ul>
                        <li><a href="/about">Hakkımızda</a></li>
                        <li><a href="/services">Hizmetler</a></li>
                        <li><a href="/contact">İletişim</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Sosyal Medya</h4>
                    <div className="social-icons">
                        <a
                            href="https://www.facebook.com/people/%C3%A7elikler-cam-pvc-al%C3%BCminyum/100067905754992/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/face.png" alt="Facebook" />
                        </a>
                        <a
                            href="https://www.instagram.com/celikleraluminyum"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/insta.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Çelikler Alüminyum. Tüm hakları saklıdır.</p>
                <p>Tasarım ve geliştirme: Hatice & Beyza</p>
            </div>
        </footer>
    );
};

export default Footer;