// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Importando seu CSS
import "./Carrossel.css";

// Importando Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8151225.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://w.forfun.com/fetch/00/008ff52a2516af485380ffd409e6c834.jpeg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images7.alphacoders.com/333/thumb-1920-333580.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://e0.pxfuel.com/wallpapers/565/654/desktop-wallpaper-anime-phone.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel