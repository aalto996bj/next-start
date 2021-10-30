import * as videoGenres from '../api/videos';
import DisplayVideo from '../../components/DisplayVideo';
import useRequest from '../../hooks/useRequest';

export default function VideoLists() {
    const [netflixOriginals, netflixOriginalsLoading] = useRequest(videoGenres.NetflixOriginals);
    const [trending, trendingLoading] = useRequest(videoGenres.Trending);
    const [topRated, topRatedLoading] = useRequest(videoGenres.TopRated);
    const [actionMovies, actionMoviesLoading] = useRequest(videoGenres.ActionMovies);
    const [comedyMovies, comedyMoviesLoading] = useRequest(videoGenres.ComedyMovies);
    const [horrorMovies, horrorMoviesLoading] = useRequest(videoGenres.HorrorMovies);
    const [romanceMovies, romanceMoviesLoading] = useRequest(videoGenres.RomanceMovies);
    const [documentaries, documentariesLoading] = useRequest(videoGenres.Documentaries);

    return (
        <div className="container">
            <div className="videoShowcase">
                <DisplayVideo
                    isLoading={netflixOriginalsLoading}
                    isNetflixMovies={true}
                    title='Netflix Originals'
                    videos={netflixOriginals.results}
                />
                <DisplayVideo
                    isLoading={trendingLoading}
                    title='Trending'
                    videos={trending.results}
                />
                <DisplayVideo
                    isLoading={topRatedLoading}
                    title='Top Rated'
                    videos={topRated.results}
                />
                <DisplayVideo
                    isLoading={actionMoviesLoading}
                    title='Action Movies'
                    videos={actionMovies.results}
                />
                <DisplayVideo
                    isLoading={comedyMoviesLoading}
                    title='Comedy'
                    videos={comedyMovies.results}
                />
                <DisplayVideo
                    isLoading={horrorMoviesLoading}
                    title='Horror Movies'
                    videos={horrorMovies.results}
                />
                <DisplayVideo
                    isLoading={romanceMoviesLoading}
                    title='Romance'
                    videos={romanceMovies.results}
                />
                <DisplayVideo
                    isLoading={documentariesLoading}
                    title='Documentaries'
                    videos={documentaries.results}
                />
            </div>
        </div>
    )
}

// export default VideoLists