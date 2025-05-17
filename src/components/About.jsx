import React from "react";

const About = () => {
    return (
        <section
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/tanitim.jpg')", // Resmi belirtin
            }}
        >
            <div className="text-center bg-white bg-opacity-70 p-8 rounded-xl shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Çelikler Alüminyum
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                    Güvenilir çözümlerle sektörün lideri.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
                    Bizimle İletişime Geçin
                </button>
            </div>
        </section>
    );
};

export default About;
