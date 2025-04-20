import React from "react";

const Gallery = () => {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Ürün Galerisi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 shadow rounded">Resim 1</div>
                <div className="bg-gray-100 p-4 shadow rounded">Resim 2</div>
                <div className="bg-gray-100 p-4 shadow rounded">Resim 03</div>
            </div>
        </section>
    );
};

export default Gallery;

