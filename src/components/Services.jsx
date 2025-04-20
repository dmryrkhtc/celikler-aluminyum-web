import React from "react";

const Services = () => {
    return (
        <section className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="font-semibold">Alüminyum Doğrama</h3>
                    <p>
                        Eklenecek
                    </p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="font-semibold">PVC Sürme Sistemleri</h3>
                    <p>
                        PVC kapı ve pencere sistemleriyle evinize şıklık katar
                    </p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="font-semibold">Montaj İşlemleri</h3>
                    <p>
                        İnşaatlarda montaj
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
