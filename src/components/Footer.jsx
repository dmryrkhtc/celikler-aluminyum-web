import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>İletişim</h4>
                    <p>Menemen Plastik OSB, 5. Cadde No:4 Menemen, İzmir</p>
                    <p>Tel: <a href="tel:02323989898">0232 398 9898</a></p>
                    <p>Fax: 0232 328 1846</p>
                    <p>Email: <a href="mailto:info@celikleraluminyum.com">info@celikleraluminyum.com</a></p>
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
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/images/face.png" alt="Facebook" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
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
