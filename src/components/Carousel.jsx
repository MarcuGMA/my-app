import { Swiper, SwiperSlide } from "swiper/react";
import gamesData from "../api/gameData";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import { ButtonHeader } from "../components/buttons";
import { Link } from "react-router-dom";

import { Autoplay, Pagination, Navigation } from "swiper";

export const MySwiper = () => {
  const handleGameItemClick = (id) => {
    localStorage.setItem("gameId", id);
  };

  const SlidesPerView = window.innerWidth < 768 ? 1 : 3;
  console.log(SlidesPerView);

  return (
    <Swiper
      className="mySwiper"
      spaceBetween={100}
      slidesPerView={SlidesPerView}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      // navigation={{
      //   prevEl: ".swiper-button-prev",
      //   nextEl: ".swiper-button-next",
      // }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {gamesData.map((item) =>
        item.swiper ? (
          <SwiperSlide
            key={item.id}
            onClick={() => handleGameItemClick(item.id)}
          >
            <div className="swiperElement">
              <img src={item.image} alt="" />
              <div className="swiperElement-info">
                <div className="swiperElement-info-name">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </div>
                <div className="line" />
                <div className="swiperElement-info-store">
                  <p>${item.price}</p>
                  <p>{item.gameStore}</p>
                </div>
                <div className="line" />
                <Link to={`/gamePage/${item.id}`}>
                  <ButtonHeader>VIEW GAME</ButtonHeader>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
};
