import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
const LoginForm = dynamic(() => import('../../components/LoginForm'), { ssr: true})

export default function Home(props){
  const router = useRouter()
  console.log(router)
  return (
  <div className="app_container home_page">
    <LoginForm {...props}/>
  </div>)
}

export async function getServerSideProps({ req }) {
  return { props: {   } };
}