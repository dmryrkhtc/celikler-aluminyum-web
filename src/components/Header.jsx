import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* LOGO */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">Çelikler Alüminyum</a>
                </div>

                {/* NAVIGATION */}
                <nav className="space-x-6 hidden md:flex">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Anasayfa</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Hakkımızda</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Hizmetler</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">İletişim</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
