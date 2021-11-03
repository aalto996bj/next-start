/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Slider } from '@alifd/next';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './index.module.css';
import styled from 'styled-components'
import 'swiper/css';

// install Swiper components
SwiperCore.use([FreeMode, Navigation, Pagination, Scrollbar, A11y])

const Img = styled.img`
    margin: 5px;
    border-radius: 10px;
    `

const DisplayVideo = ({ isLoading, title, isNetflixMovies, videos }) => {
    const windowSize = useWindowSize();
    const { width } = windowSize;

    return (
        <>
            {!isLoading ?
            <div className="loaded">
                <h1>{title}</h1>
                {/* <Swiper
                    navigation={true}
                    grabCursor={false}
                    loop={true}
                    loopAdditionalSlides={
                        width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
                    }
                    // spaceBetween={20}
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
                    // freeMode={true}
                    preventClicksPropagation={true}
                    preventClicks={true}
                    scrollbar={{ draggable: false, hide: true }}
                    slideToClickedSlide={false}
                    pagination={{ clickable: true }}
                >
                    {videos &&
                        videos.map((video, idx) => {
                            let videoImageUrl = isNetflixMovies
                                ? `https://image.tmdb.org/t/p/original/${video.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${video.backdrop_path}`

                            if (video.poster_path && video.backdrop_path !== null) {
                                return (
                                    <SwiperSlide
                                        key={idx}
                                    >
                                        <img
                                            height={isNetflixMovies ? 360 : 165}
                                            width={isNetflixMovies ? 240 : 300}
                                            src={videoImageUrl}
                                            alt='opps...'
                                        />
                                    </SwiperSlide>
                                )
                            }
                        })}
                </Swiper> */}
                <Slider 
                    className={styles.center}
                    arrowPosition="outer"
                    dots={true}
                    infinite={true}
                    slidesToShow={5}
                    slidesToScroll={2}
                    autoplay={true}
                    autoplaySpeed={4000}
                    pauseOnHover={true}
                    centerMode={true}
                >
                    {videos &&
                        videos.map((video, idx) => {
                            if (video.poster_path !== null && video.backdrop_path !== null) {
                                let videoImageUrl = isNetflixMovies
                                    ? `https://image.tmdb.org/t/p/original/${video.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500/${video.backdrop_path}`

                                return (
                                    <Img
                                        key={idx}
                                        // className={styles.img}
                                        height={isNetflixMovies ? 360 : 165}
                                        width={isNetflixMovies ? 240 : 300}
                                        src={videoImageUrl}
                                        alt='opps...'
                                    />
                                )
                            }
                        })}
                </Slider>
            </div>
            :
            <h1 className="loading">{title} is loading...</h1>
            }
        </>
    )
}

export default DisplayVideo;
