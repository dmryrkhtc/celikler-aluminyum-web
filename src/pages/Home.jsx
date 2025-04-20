import React from "react";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <section className="h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Çelikler Alüminyum</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Profesyonel çözümler, kaliteli hizmet!
                    </p>

                </div>
            </section>
        </div>
    );
};

export default Home;
