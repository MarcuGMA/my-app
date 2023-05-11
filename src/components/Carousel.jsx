import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonHeader } from '../components/buttons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperElementsData from '../api/gamesData';

  export const MySwiper = () => {
  return (
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {SwiperElementsData.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="swiperElement">
                    <img src={item.image} alt="" />
                    <div className="swiperElement-info">
                        <div className="swiperElement-info-name">
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                        <div className="swiperElement-info">
                            <p>{item.price}</p>
                            <p>{item.gameStore}</p>
                            <ButtonHeader>VIEW GAME</ButtonHeader>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  );
};


