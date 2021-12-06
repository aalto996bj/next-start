import Navigation from "../components/Navigation";
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

export default function Home(){
  const router = useRouter()
  console.log(router)
  // window.HELP_IMPROVE_VIDEOJS = false;
  return (
  <div className="app_container home_page">
    <Navigation />
    <LoginForm />
  </div>)
}