import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <div className="logo">
                <h1>Çelikler Alüminyum</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Anasayfa</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Hakkımızda</Link></li>
                    <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Ürünler</Link></li>
                    <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Hizmetler</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>İletişim</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
