import Navigation from "../components/Navigation";
import VideoLists from "./video/VideoLists";
import { useRouter } from 'next/router';

export default function Home(){
  const router = useRouter()
  console.log(router)
  return (
  <div className="app_container home_page">
    <Navigation />
    <div className="content">
      <VideoLists />
    </div>
  </div>)
}