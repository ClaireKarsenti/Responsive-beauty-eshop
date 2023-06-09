import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css';
import { SliderProducts } from '../../data/products';

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {SliderProducts.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="left-slider">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>

            <img src={slide.img} alt="product" className="img-product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
