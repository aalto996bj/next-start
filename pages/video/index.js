// 
import Navigation from "../../components/Navigation";
import VideoLists from "./VideoLists";
import { useRouter } from 'next/router';


export default function Videos(){
  const router = useRouter()
  // console.log(router)
  //console.log(window.location)
  return (<div className="app_container video_page">
    <Navigation />
    <div className="video_content">
      <VideoLists />
    </div>
  </div>)
}