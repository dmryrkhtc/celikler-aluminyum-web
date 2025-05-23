import React from "react";

import pexel2Image from "../pictures/dukkan.jpg";
import pexel3Image from "../pictures/araba.jpg";
import pexel4Image from "../pictures/pexel.jpg";
import "./About.css";

const About = () => {
    return (
        <section className="about">



            <div className="container">
                <div className="image-container">

                    <img src={pexel2Image} alt="Çelikler Alüminyum Hakkımızda" />
                    <img src={pexel3Image} alt="Çelikler Alüminyum Hakkımızda" />
                    <img src={pexel4Image} alt="Çelikler Alüminyum Hakkımızda" />
                </div>

                <div className="text-container">
                    <h2>Hakkımızda</h2>
                    <p>
                        2004 yılında Sivas’ta kurulan <strong>Çelikler Alüminyum</strong>, yapı
                        sektörüne yönelik sunduğu yenilikçi çözümler ve güvenilir hizmet
                        anlayışıyla bölgenin öncü firmalarından biri olmuştur. Kuruluşundan
                        bu yana müşteri memnuniyetini merkeze alan firmamız, hem bireysel hem
                        kurumsal projelerde yüksek kalite standartlarına sahip ürün ve hizmetler
                        sunmaktadır.
                    </p>
                    <p>
                        PVC doğrama, panjur, sineklik, duşakabin, cam balkon, alüminyum doğrama,
                        küpeşte, fotoselli kapı ve otomatik kepenk sistemleri gibi geniş bir ürün
                        yelpazesiyle hizmet veren firmamız; Sivas merkezli olmakla birlikte çevre
                        illerde de önemli projelere imza atmıştır. Estetik ve dayanıklılığı bir
                        araya getiren çözümlerimizle yaşam alanlarını daha konforlu ve modern
                        hale getirmeyi amaçlıyoruz.
                    </p>
                    <p>
                        Deneyimli kadromuz, güçlü teknik altyapımız ve çözüm odaklı yaklaşımımız
                        sayesinde sektörde güven duyulan bir marka haline gelen firmamız, yılların
                        getirdiği tecrübe ve yenilikçi vizyonuyla sürekli olarak kendini
                        geliştirmektedir.
                    </p>
                    <p>
                        <strong>Çelikler Alüminyum</strong> olarak hedefimiz, sektördeki
                        teknolojik gelişmeleri yakından takip ederek kalite ve hizmet çıtamızı
                        sürekli yukarı taşımak ve müşterilerimize her zaman en iyisini sunmaktır.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;