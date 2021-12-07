import '@alifd/next/dist/next.css';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps }) {
  const [userstate, setUserstate] = useState()
  return <>
    <Navigation userstate={userstate} setUserstate={setUserstate}/>
    <Component {...pageProps} userstate={userstate} setUserstate={setUserstate}/>
  </>
}