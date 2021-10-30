import Navigation from "../../components/Navigation";
import { useRouter } from 'next/router';
import VideoBox from "../../components/VideoBox";
import CommentBox from "../../components/CommentBox";
import Error from 'next/error'

export default function VideoDetail(){
  const router = useRouter()
  return (<div className="app_container video_detail">
    <Navigation />
    { 
      !!router.query.params ? <div className="app_content">
        <VideoBox params={router.query.params}/>
        <CommentBox params={router.query.params}/>
      </div> 
        :
      <Error />
    }
  </div>)
} 