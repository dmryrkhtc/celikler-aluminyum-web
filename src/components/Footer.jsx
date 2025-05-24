import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>İletişim</h4>
                    <p>
                        <br />
                        <a
                            href="https://www.google.com/maps?ll=39.725886,37.009512&z=16&t=m&hl=tr&gl=TR&mapclient=embed&q=4.+Cd.+4+EYL%C3%9CL+SANAY%C4%B0%C4%B0+S%C4%B0TES%C4%B0+NO:18+G%C3%BCltepe+58020+Sivas+Merkez/Sivas"
                            target="_blank"
                            rel="noopener noreferrer"
                        > 4. Cd. 4 EYLÜL SANAYİİ SİTESİ NO:18 Gültepe 58020 Sivas Merkez/Sivas

                        </a>
                    </p>
                    <p>Nuri ÇELİK Tel: <a href="tel:05364505458">0536 450 54 58</a></p>
                    <p>Tel2: <a href="tel:05522383193">0552 238 31 93</a></p>
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
