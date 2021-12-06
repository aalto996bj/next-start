import { Notification } from "@alifd/next";
import React, {useEffect} from "react";
import Image from 'next/image'
import imdbImg from '../public/imdb.svg';

function useReference() {
  Notification.config({ placement: 'bottomRight', duration: 0, maxCount: 1 });
  useEffect(() => {
    Notification.open({
      title: "Reference of data",
      content:
        <>
          Educational use only. This product uses the TMDB API but is not endorsed or certified by TMDB. <br/>
          <a href="https://www.themoviedb.org/documentation/api">
            <Image src={imdbImg} width={120} alt="oops..."/>
          </a>
        </>,
      icon: 'none'
    });
    return () => {
      Notification.close();
    };
  }, [])
}


export default useReference