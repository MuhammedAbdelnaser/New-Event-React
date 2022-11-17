// Import Swiper React components
import slide1 from 'images/speakers/image-1.jpg';
import slide2 from 'images/speakers/image-2.jpg';
import slide3 from 'images/speakers/image-3.jpg';
import slide4 from 'images/speakers/image-4.jpeg';
import slide5 from 'images/speakers/image-5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay } from 'swiper';
import 'swiper/css';
import { SlideImg, SliderWrapper } from './style';

export default () => {
    return (
        <Swiper
            className='container'
            autoplay={{ delay: 2000 }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SliderWrapper>
                <SwiperSlide>
                    <SlideImg src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={slide2} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={slide3} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={slide4} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={slide5} />
                </SwiperSlide>
            </SliderWrapper>
        </Swiper>
    );
};