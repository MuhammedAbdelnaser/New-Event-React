// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import CreativeSpeakers from 'design/components/CreativeSpeakers/CreativeSpeakers';
import SpeakersData from 'design/components/CreativeSpeakers/SpeakersData';
import { Autoplay } from 'swiper';
import 'swiper/css';
export default () => {
    return (
        <Swiper
            className='container'
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={4}

        >
            {
                SpeakersData.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <CreativeSpeakers
                                name={item.name}
                                job={item.job}
                                src={item.img}
                                alt={item.alt}
                                img={item.img}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};