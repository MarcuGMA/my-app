import { Swiper, SwiperSlide } from "swiper/react";
import SwiperElementsData from "../api/gamesData";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import { ButtonHeader } from "../components/buttons";

import { Autoplay, Pagination, Navigation } from 'swiper';

export const MySwiper = () => {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={100}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {SwiperElementsData.map((item) =>
        item.swiper ? (
          <SwiperSlide key={item.id}>
            <div className="swiperElement">
              <img src={item.image} alt="" />
              <div className="swiperElement-info">
                <div className="swiperElement-info-name">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </div>
                <div className="line" />
                <div className="swiperElement-info-store">
                  <p>{item.price}</p>
                  <p>{item.gameStore}</p>
                </div>
                <div className="line" />
                <ButtonHeader>VIEW GAME</ButtonHeader>
              </div>
            </div>
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
};
