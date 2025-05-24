import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../pictures/celikler.png';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <div className="logo">

                <Link to="/">
                    <img src={logoImage} alt="Çelikler Logo" className="logo-img" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Anasayfa</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Hakkımızda</Link></li>
                    <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Hizmetler</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>İletişim</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

