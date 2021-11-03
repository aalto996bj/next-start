// 
import Navigation from "../../components/Navigation";
import DisplayVideo from '../../components/DisplayVideo';
import { useRouter } from 'next/router';
import * as videoGenres from '../api/videos';

export default function VideoSSR({ videoData }) {
    const router = useRouter()
    console.log(router)
    // console.log(videoData);
    return (
        <div className="container">
            <Navigation />
            <div className="videoShowcase">
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={true}
                    title='Netflix Originals'
                    videos={videoData[0]}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Trending'
                    videos={videoData[1]}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Top Rated'
                    videos={videoData[2]}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Action Movies'
                    videos={videoData[3]}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Comedy'
                    videos={videoData[4]}
                />
                <DisplayVideo
                    isLoading={false}
                    title='Horror Movies'
                    videos={videoData[5]}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Romance'
                    videos={videoData[6]}
                />
                {/* <DisplayVideo
                    isLoading={documentariesLoading}
                    isNetflixMovies={false}
                    title='Documentaries'
                    videos={!documentariesLoading ? documentaries.results : []}
                /> */}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const urls = Object.values(videoGenres);
    const videoData = await Promise.all(urls.map(async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        return data.results;
    }));
    return { props: { videoData } };
}

// export default function HomeSSR() {
//     const router = useRouter()
//     console.log(router)
//     return (<div className="app_container home_page_ssr">
//         <VideoLists />
//     </div>)
// }