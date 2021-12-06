/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Card, Rating, Slider } from '@alifd/next';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './index.module.css';
import styled from 'styled-components'
import 'swiper/css';
import { useRouter } from 'next/router';
import TextTruncate from 'react-text-truncate';

// install Swiper components
SwiperCore.use([FreeMode, Navigation, Pagination, Scrollbar, A11y])

const Img = styled.img`
    margin: 5px;
    border-radius: 10px;
    `

const DIV = styled.div`
    margin: 5px;
    border-radius: 10px;
    `

const DisplayVideo = ({ isLoading, title, isNetflixMovies, videos }) => {
    const router = useRouter()
    const windowSize = useWindowSize();
    const { width } = windowSize;
    const slidesToShow = width >= 1400 ? (isNetflixMovies ? 5 : 4) : width >= 1170 ? (isNetflixMovies ? 4 : 3) : width >= 940 ? (isNetflixMovies ? 3 : 2) : (isNetflixMovies ? 2 : 1);

    return (
        <>
            {!isLoading ?
            <Card className="loaded" free style={{ marginBottom: 16}}>
                <Card.Content>
                <h1>{title}</h1>
                <Slider 
                    className={styles.center}
                    arrowPosition="outer"
                    dots={false}
                    infinite={true}
                    slidesToShow={slidesToShow}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={4000}
                    pauseOnHover={true}
                    centerMode={true}
                    centerPadding="60px"
                    speed={500}
                    // lazyLoad={true}
                >
                    {videos &&
                        videos.map((video, idx) => {
                            if (video.poster_path !== null && video.backdrop_path !== null) {
                                let videoImageUrl = isNetflixMovies
                                    ? `https://image.tmdb.org/t/p/original/${video.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500/${video.backdrop_path}`

                                return (
                                    <div key={video.id}>
                                        <Img
                                            className={styles.cursorPointer}
                                            onClick={()=>router.push(`video/${video.id}`)}
                                            height={isNetflixMovies ? 360 : 165}
                                            width={isNetflixMovies ? 240 : 300}
                                            src={videoImageUrl}
                                            alt='opps...'
                                        /> <br />
                                        <div 
                                            className={isNetflixMovies ? styles.wrapNet : styles.wrap} 
                                            onClick={()=>router.push(`video/${video.id}`)}
                                            className={styles.cursorPointer}
                                        >
                                            <span className={styles.videoTitle}>{video.name}</span><br />
                                            <div style={{width: isNetflixMovies ? 250 : 300, height:80, fontSize: 14, textAlign: 'justify', textJustify: 'inter-word'}} >
                                                <TextTruncate
                                                    line={4}
                                                    element="div"
                                                    truncateText="..."
                                                    text={video.overview}
                                                />
                                            </div>
                                            <div style={{lineHeight: '24px', height: 26}}>Rate: <Rating value={video.vote_average/2} allowHalf/> {video.vote_average}</div>
                                            <span>Heat: {video.vote_count}</span><br />
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </Slider>
                </Card.Content>
            </Card>
            :
            <h1 className="loading">{title} is loading...</h1>
            }
        </>
    )
}

export default DisplayVideo;
