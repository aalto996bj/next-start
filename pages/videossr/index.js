// 
import Navigation from "../../components/Navigation";
// import DisplayVideo from '../../components/DisplayVideo';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import * as videoGenres from '../api/videos';
// import fs from 'fs';

// function saveVideoData(data) {
//     const genres = ['NetflixOriginals', 'Trending', 'TopRated', 'ActionMovies', 'ComedyMovies', 'HorrorMovies', 'RomanceMovies', 'Documentaries'];
//     const videoData = {};
//     for (let i = 0; i < genres.length; i++) {
//         const genreData = [];
//         for (let j = 0; j < data[i].length; j++) {
//             genreData.push({
//                 name: data[i][j].name,
//                 backdrop_path: data[i][j].backdrop_path,
//                 poster_path: data[i][j].poster_path,
//                 genre: genres[i],
//                 id: data[i][j].id,
//                 // popularity: data[i][j].popularity,
//                 overview: data[i][j].overview,
//                 vote_average: data[i][j].vote_average,
//                 vote_count: data[i][j].vote_count
//             })
//         }
//         videoData[genres[i]] = genreData;
//     }
//     fs.writeFile("videoData.json", JSON.stringify(videoData), function (err) {
//         if (err) throw err;
//             console.log('complete');
//         }
//     );
// }

const DisplayVideo = dynamic(
    () => import('../../components/DisplayVideo'),
    { ssr: false }
)

export default function VideoSSR({ videoData }) {
    const router = useRouter()
    console.log(router)
    // console.log(videoData);
    return (
        <div className="container">
            <Navigation />
            <div className="video_content">
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
    // saveVideoData(videoData);
    return { props: { videoData } };
}

// export default function HomeSSR() {
//     const router = useRouter()
//     console.log(router)
//     return (<div className="app_container home_page_ssr">
//         <VideoLists />
//     </div>)
// }