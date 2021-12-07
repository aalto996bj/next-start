import { useRouter } from 'next/router'
import * as videoGenres from '../api/videos';
import DisplayVideo from '../../components/DisplayVideo';
import useRequest from '../../hooks/useRequest';

export default function VideoLists() {
    // const [netflixOriginals, netflixOriginalsLoading] = useRequest(videoGenres.NetflixOriginals);
    // console.log(netflixOriginals.results);
    // const [trending, trendingLoading] = useRequest(videoGenres.Trending);
    // console.log(trending.results);
    // const [topRated, topRatedLoading] = useRequest(videoGenres.TopRated);
    // const [actionMovies, actionMoviesLoading] = useRequest(videoGenres.ActionMovies);
    // const [comedyMovies, comedyMoviesLoading] = useRequest(videoGenres.ComedyMovies);
    // const [horrorMovies, horrorMoviesLoading] = useRequest(videoGenres.HorrorMovies);
    // const [romanceMovies, romanceMoviesLoading] = useRequest(videoGenres.RomanceMovies);
    // const [documentaries, documentariesLoading] = useRequest(videoGenres.Documentaries);
    const router = useRouter();
    const [videoData, videoDataLoading] = useRequest(router.basePath + "/api/videos/video_list");

    return (
        <div className="container">
            <div className="videoShowcase">
                {/* <DisplayVideo
                    isLoading={netflixOriginalsLoading}
                    isNetflixMovies={true}
                    title='Netflix Originals'
                    videos={!netflixOriginalsLoading ? netflixOriginals.results : []}
                />
                <DisplayVideo
                    isLoading={trendingLoading}
                    isNetflixMovies={false}
                    title='Trending'
                    videos={!trendingLoading ? trending.results : []}
                />
                <DisplayVideo
                    isLoading={topRatedLoading}
                    isNetflixMovies={false}
                    title='Top Rated'
                    videos={!topRatedLoading ? topRated.results : []}
                />
                <DisplayVideo
                    isLoading={actionMoviesLoading}
                    isNetflixMovies={false}
                    title='Action Movies'
                    videos={!actionMoviesLoading ? actionMovies.results : []}
                />
                <DisplayVideo
                    isLoading={comedyMoviesLoading}
                    isNetflixMovies={false}
                    title='Comedy'
                    videos={!comedyMoviesLoading ? comedyMovies.results : []}
                />
                <DisplayVideo
                    isLoading={horrorMoviesLoading}
                    title='Horror Movies'
                    videos={!horrorMoviesLoading ? horrorMovies.results : []}
                />
                <DisplayVideo
                    isLoading={romanceMoviesLoading}
                    isNetflixMovies={false}
                    title='Romance'
                    videos={!romanceMoviesLoading ? romanceMovies.results : []}
                /> */}
                {/* <DisplayVideo
                    isLoading={documentariesLoading}
                    isNetflixMovies={false}
                    title='Documentaries'
                    videos={!documentariesLoading ? documentaries.results : []}
                /> */}
                <DisplayVideo
                    isLoading={videoDataLoading}
                    isNetflixMovies={true}
                    title='Netflix Originals'
                    videos={videoDataLoading ? [] : videoData.data.slice(0, 20)}
                />
                <DisplayVideo
                    isLoading={videoDataLoading}
                    isNetflixMovies={false}
                    title='Trending'
                    videos={videoDataLoading ? [] : videoData.data.slice(21, 40)}
                />
                <DisplayVideo
                    isLoading={videoDataLoading}
                    isNetflixMovies={false}
                    title='Top Rated'
                    videos={videoDataLoading ? [] : videoData.data.slice(41, 60)}
                />
                <DisplayVideo
                    isLoading={videoDataLoading}
                    isNetflixMovies={false}
                    title='Action Movies'
                    videos={videoDataLoading ? [] : videoData.data.slice(61, 80)}
                />
                <DisplayVideo
                    isLoading={videoDataLoading}
                    isNetflixMovies={false}
                    title='Comedy'
                    videos={videoDataLoading ? [] : videoData.data.slice(81, 100)}
                />
                <DisplayVideo
                    isLoading={videoDataLoading}
                    title='Horror Movies'
                    videos={videoDataLoading ? [] : videoData.data.slice(101, 120)}
                />
                <DisplayVideo
                    isLoading={videoDataLoading}
                    isNetflixMovies={false}
                    title='Romance'
                    videos={videoDataLoading ? [] : videoData.data.slice(121, 140)}
                />
            </div>
        </div>
    )
}

// export default VideoLists