// not sure why this file doesn't work since line 9 always get undefined
// after google it says getServerSideProps only works on page level, not on component level
// Then I just put the same code direct into index.js and it worked
// import Navigation from "../../components/Navigation";
// import DisplayVideo from '../../components/DisplayVideo';
// import * as videoGenres from '../api/videos';
// import { useRouter } from "next/router";
// export default function VideoSSR({ videoData }) {
//     const router = useRouter()
//     console.log(router)
//     // console.log(videoData);
//     return (
//         <div className="container">
//             <Navigation />
//             <div className="videoShowcase">
//                 <h1>hello world</h1>
//             </div>
//         </div>
//     )
// }

// export async function getServerSideProps(context) {
//     console.log(context);
//     const urls = Object.values(videoGenres);
//     console.log(urls);
//     const videoData = await Promise.all(urls.map(async (url) => {
//         const resp = await fetch(url);
//         const data =  await resp.json();
//         return data;
//     }));
//     console.log(videoData);
//     return { props: { videoData } };
// }

import Navigation from "../../components/Navigation";
import { useRouter } from 'next/router';
import VideoBox from "../../components/VideoBox";
import CommentBox from "../../components/CommentBox";
import Error from 'next/error';
import useWindowSize from '../../hooks/useWindowSize';

const getVideoAreaSize = (win) => {
  if (win && win.width){
    let width = win.width-134
    let height = width * 0.75
    let maxHeight = win.height * 0.6
    let maxWidth = maxHeight / 0.75
    return {  width, height, maxHeight, maxWidth }
  }
  return {}
}

// // This gets called on every request
export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://617d21b01eadc500171363e4.mockapi.io/api/comments/Comments`)
//   const comments = await res.json()

//   // Pass data to the page via props
  return { props: {  } }
}

export default function VideoDetail(props){
  const router = useRouter()
  const size = useWindowSize()
  return (<div className="app_container video_detail">
    <Navigation />
    { 
      !!router.query.params ? <div className="app_content">
        <VideoBox size={getVideoAreaSize(size)} params={router.query.params}/>
        <CommentBox size={getVideoAreaSize(size)} params={router.query.params} />
      </div> 
        :
      <Error />
    }
  </div>)
}