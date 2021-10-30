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

export default function VideoDetail(){
  const router = useRouter()
  const size = useWindowSize()
  return (<div className="app_container video_detail">
    <Navigation />
    { 
      !!router.query.params ? <div className="app_content">
        <VideoBox size={getVideoAreaSize(size)} params={router.query.params}/>
        <CommentBox size={getVideoAreaSize(size)} params={router.query.params}/>
      </div> 
        :
      <Error />
    }
  </div>)
} 