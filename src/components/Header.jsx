
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <div className="header-container">
                <h1 className="logo">Çelikler Alüminyum</h1>
                <nav>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Anasayfa</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Hakkımızda</Link>
                    <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Ürünler</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Hizmetler</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>İletişim</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
