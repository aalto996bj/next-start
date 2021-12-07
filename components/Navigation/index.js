import { Nav, Avatar  } from "@alifd/next";
import Link from "next/link";
import Head from 'next/head'
import styles from './index.module.css';
import { useEffect } from "react";

const {SubNav, Item} = Nav

export default function Navigation({userstate, setUserstate}){
  const checkLogin = () => {
    let now = (new Date).valueOf()
    let hasLogged = false
    if (typeof window !== 'undefined'){
      const user = JSON.parse(localStorage.getItem('loggedUser'))
      console.log( 'Header state: ' ,user , user?.data ? (now - user.data.loginTime) : undefined)
      hasLogged = user && ((now - user.data.loginTime) < 60000)
    }
    return hasLogged
  }
  useEffect(() => {
    checkLogin()
  }, [])

  const userProfile = <div className={styles.avatar}>
    {
      checkLogin() ? <Avatar size='small' src={userstate?.data?.avatar}/> : <a href='/'>Sign in</a>
    }
  </div>

  return (
  <div>
    <Head>
        <title>Video Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav
      className={styles.top_nav}
      type="line"
      direction="hoz"
      triggerType="hover"
      header={<span style={{fontSize: 16, fontFamily: 'Roboto', fontWeight: 'bold', padding: '0 8px ', color: '#333', opacity: 0.8}}>Next start</span>}
      selectedKeys={[]}
      style={{ top: 0, position: 'fixed' }}
      footer={userProfile}
    >
      <SubNav label="Home">
        <Item key="login"><Link href="/">Login</Link></Item>
        <Item key="loginssr"><Link href="/loginssr">Login SSR</Link></Item>
      </SubNav>
      <Item key="video"><Link href="/video">Videos</Link></Item>
      <Item key="video-ssr"><Link href="/videossr">Videos with SSR</Link></Item>
    </Nav>
    </div>
  )}
  
