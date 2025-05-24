import React, { useState } from "react";
import "./Services.css";
import img1 from "../pictures/pvc1.jpg";
import img2 from "../pictures/surme2.jpg";
import img3 from "../pictures/panjur2.jpg";
import img4 from "../pictures/sinek2.jpg";
import img5 from "../pictures/dusakabin4.jpg";
import img6 from "../pictures/camb5.jpeg";
import img7 from "../pictures/al1.jpg";
import img8 from "../pictures/kupeste1.jpg";
import img9 from "../pictures/foto3.jpg";
import img10 from "../pictures/kepenk4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const servicesData = [
    {
        title: "PVC Pencere ve Kapı Sistemleri",
        image: img1,
        description: "Dünya standartlarında üstün teknoloji ile üretilen PVC sistemleri, maksimum ses ve ısı yalıtımı sağlar.",
    },
    {
        title: "PVC Sürme Sistemleri",
        image: img2,
        description: "İç ve dış mekanlarda şıklığı ve fonksiyonelliği bir arada sunan PVC sürme sistemlerimizle manzaranızı bölmeyin.",
    },
    {
        title: "Kepenk ve Panjur Sistemleri",
        image: img3,
        description: "Yalıtım ve estetik desteği bir arada sunan panjur ve kepenk sistemleri ile mekanlara değer katın.",
    },
    {
        title: "Sineklik Sistemleri",
        image: img4,
        description: "Pratik kullanım sunan sineklik sistemleriyle yaşam alanlarınızı haşerelerden koruyun.",
    },
    {
        title: "Duşakabin Sistemleri",
        image: img5,
        description: "Modern ve şık duşakabin çözümleriyle banyolarınıza estetik katın.",
    },
    {
        title: "Cam Balkon Sistemleri",
        image: img6,
        description: "Manzaranızı kapatmadan koruma sağlayan cam balkon sistemleriyle konforu artırın.",
    },
    {
        title: "Alüminyum Doğrama",
        image: img7,
        description: "Dayanıklı ve estetik alüminyum doğrama çözümleriyle uzun ömürlü yapılar.",
    },
    {
        title: "Küpeşte Sistemleri",
        image: img8,
        description: "Güvenlik ve şıklığı birleştiren küpeşte sistemleri iç ve dış mekanlara değer katar.",
    },
    {
        title: "Fotoselli Kapı Sistemleri",
        image: img9,
        description: "Yoğun geçişlerde konfor ve hijyen sağlayan otomatik fotoselli kapı sistemleri.",
    },
    {
        title: "Otomatik Kepenk Sistemleri",
        image: img10,
        description: "Güvenliğinizi artıran modern otomatik kepenk sistemleriyle iş yeriniz güvende.",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Services = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Arama terimine göre filtrelenmiş hizmetler
    const filteredServices = servicesData.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="services">
            <h2>Hizmetlerimiz</h2>
            {/* Arama kutusu */}
            <input
                type="text"
                placeholder="Hizmet ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    marginBottom: "20px",
                    padding: "10px",
                    width: "100%",
                    maxWidth: "400px",
                    fontSize: "16px",
                }}
            />

            {/* Filtrelenmiş hizmetleri slider ile göster */}
            {filteredServices.length > 0 ? (
                <Slider {...settings}>
                    {filteredServices.map((service, index) => (
                        <div className="service-card" key={index}>
                            <Link to={`/services/${servicesData.indexOf(service)}`}>
                                <img src={service.image} alt={service.title} />
                                <div className="service-title-bar">{service.title}</div>
                                <p>{service.description}</p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Aramanıza uygun hizmet bulunamadı.</p>
            )}
        </section>
    );
};

export default Services;
