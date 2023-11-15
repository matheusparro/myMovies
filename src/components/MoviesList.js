import React from 'react';
import { MovieItem } from "./MovieItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./styles.css";
import { Pagination, Navigation } from 'swiper/modules';
export const MoviesList = ({ movies }) => {
    return (
        <Swiper watchSlidesProgress={true} slidesPerView={1} className="mySwiper"
                direction="horizontal"
                autoHeight={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                tabIndex={-1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: "5%", // Use uma porcentagem relativa
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: "10%", // Use uma porcentagem relativa
                    },
                    1024: {
                        slidesPerView: 4.7,
                        spaceBetween: "1%", // Use uma porcentagem relativa
                    },
                }}
        >
            {movies.map((movie, index) => (
                <SwiperSlide diretabIndex={-1} key={movie.id} style={{ width: '200px' }}>
                    <MovieItem {...movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
