import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonHeader } from '../components/buttons';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import SwiperElementsData from '../api/gamesData';

  export const MySwiper = () => {
  return (
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      // pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {SwiperElementsData.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="swiperElement">
                    <img src={item.image} alt="" />
                    <div className="swiperElement-info">
                        <div className="swiperElement-info-name">
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                        <div className="line"></div>
                        <div className="swiperElement-info-store">
                            <p>{item.price}</p>
                            <p>{item.gameStore}</p>
                        </div>
                        <div className="line"></div>
                        <ButtonHeader>VIEW GAME</ButtonHeader>
                    </div>
                </div>  
            </SwiperSlide>
        ))}
    </Swiper>
  );
};


