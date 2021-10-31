import React, { Component } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useWindowSize } from '../../hooks/useWindowSize';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const DisplayMovie = ({ title, isNetflixMovies, movies }) => {
    const windowSize = useWindowSize()
    const { width } = windowSize

    return (
        <>
            <h1 className='movieShowcase__heading'>{title}</h1>
            <Swiper
                className='movieShowcase__container'
                navigation={false}
                grabCursor={false}
                draggable={false}
                loop={false}
                loopAdditionalSlides={
                    width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
                }
                breakpoints={{
                    1378: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    998: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    625: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    0: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                preventClicksPropagation={true}
                preventClicks={true}
                // scrollbar={{ draggable: false, hide: true }}
                slideToClickedSlide={false}
            // pagination={{ clickable: false }}
            >
                {movies &&
                    movies.map((movie, idx) => {
                        let movieImageUrl = isNetflixMovies
                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                            : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

                        if (movie.poster_path && movie.backdrop_path !== null) {
                            return (
                                <SwiperSlide
                                    key={idx}
                                >
                                    <Image
                                        src={movieImageUrl}
                                        className='movieShowcase__container--movie-image'
                                        alt="oops"
                                    />
                                </SwiperSlide>
                            )
                        }
                    })}
            </Swiper>
        </>
    )
}

export default DisplayMovie
