// 
import Navigation from "../../components/Navigation";
// import DisplayVideo from '../../components/DisplayVideo';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import * as videoGenres from '../api/videos';
import useReference from "../../hooks/useReference";
// import fs from 'fs';

// function saveVideoData(data) {
//     const genres = ['NetflixOriginals', 'Trending', 'TopRated', 'ActionMovies', 'ComedyMovies', 'HorrorMovies', 'RomanceMovies', 'Documentaries'];
//     const videoData = {};
//     for (let i = 0; i < genres.length; i++) {
//         const genreData = [];
//         for (let j = 0; j < data[i].length; j++) {
//             genreData.push({
//                 name: data[i][j].name || data[i][j].title,
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
    { ssr: true }
)

export default function VideoSSR({ host, videoData }) {
    useReference()
    const router = useRouter()
    console.log(host);
    videoData = videoData.data
    return (
        <div className="container">
            <div className="video_content">
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={true}
                    title='Netflix Originals'
                    videos={videoData.slice(0, 20)}
                    ssr={true}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Trending'
                    videos={videoData.slice(21, 40)}
                    ssr={true}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Top Rated'
                    videos={videoData.slice(41, 60)}
                    ssr={true}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Action Movies'
                    videos={videoData.slice(61, 80)}
                    ssr={true}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Comedy'
                    videos={videoData.slice(81, 100)}
                    ssr={true}
                />
                <DisplayVideo
                    isLoading={false}
                    title='Horror Movies'
                    videos={videoData.slice(101, 120)}
                    ssr={true}
                />
                <DisplayVideo
                    isLoading={false}
                    isNetflixMovies={false}
                    title='Romance'
                    videos={videoData.slice(121, 140)}
                    ssr={true}
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

export async function getServerSideProps({ req }) {
    // const urls = Object.values(videoGenres);
    // const data = await Promise.all(urls.map(async (url) => {
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     return data.results;
    // }));
    const host = req.headers.host + '/api/videos/video_list';
    const res = await fetch( 'http://'+ req.headers.host + "/api/videos/video_list");
    const videoData = await res.json();
    // saveVideoData(data);
    return { props: { host, videoData } };
}



// export default function HomeSSR() {
//     const router = useRouter()
//     console.log(router)
//     return (<div className="app_container home_page_ssr">
//         <VideoLists />
//     </div>)
// }