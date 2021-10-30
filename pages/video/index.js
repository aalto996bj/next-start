// 
import Navigation from "../../components/Navigation";
import { useRouter } from 'next/router';

export default function Home(){
  const router = useRouter()
  console.log(router)
  return (<div className="app_container video_page">
    <Navigation />
  </div>)
}