import React, { useState, useEffect } from 'react';
import * as movieGenres from '../../pages/api/movies';
// import DisplayMovie from './DisplayMovie';

import useRequest from '../../hooks/useRequest';

const Content = () => {
    console.log(movieGenres.NetflixOriginals)
    const { netflixOriginals, setNetflixOriginalsLoading } = useRequest(movieGenres.NetflixOriginals);
    console.log(netflixOriginals);
    // const trending = useState({})
    // const topRated = useState({})
    // const actionMovies = useState({})
    // const comedyMovies = useState({})
    // const horrorMovies = useState({})
    // const romanceMovies = useState({})
    // const documentaries = useState({})

    return (
        <div className='container'>
            <div className='movieShowcase'>
                {/* <DisplayMovie
                    isNetflixMovies={true}
                    title='Netflix Originals'
                    movies={netflixOriginals.data}
                />
                <DisplayMovie
                    title='Trending'
                    movies={trending.data}
                />
                <DisplayMovie
                    title='Top Rated'
                    movies={topRated.data}
                />
                <DisplayMovie
                    title='Action Movies'
                    movies={actionMovies.data}
                />
                <DisplayMovie
                    title='Comedy'
                    movies={comedyMovies.data}
                />
                <DisplayMovie
                    title='Horror Movies'
                    movies={horrorMovies.data}
                />
                <DisplayMovie
                    title='Romance'
                    movies={romanceMovies.data}
                />
                <DisplayMovie
                    title='Documentaries'
                    movies={documentaries.data}
                /> */}
            </div>
        </div>
    )
}

export default Content