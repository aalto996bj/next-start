// 
import Navigation from "../../components/Navigation";
import VideoLists from "./VideoLists";
import { useRouter } from 'next/router';
import useReference from "../../hooks/useReference";


export default function Videos(){
  const router = useRouter()
  useReference()
  // console.log(router)
  //console.log(window.location)
  return (<div className="app_container video_page">
    <Navigation />
    <div className="video_content">
      <VideoLists />
    </div>
  </div>)
}