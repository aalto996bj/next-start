import { Nav } from "@alifd/next";
import Link from "next/link";
import Head from 'next/head'

export default function Navigation(){
  return (
  <div>
    <Head>
        <title>Video Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav
      className="top-nav"
      type="line"
      direction="hoz"
      header={<span style={{fontSize: 16, fontFamily: 'black, MS yahei', fontWeight: 'bold', padding: '0 8px ', color: '#333', opacity: 0.8}}>Next start</span>}
      selectedKeys={[]}
    >
      <Nav.Item key="home"><Link href="/">Home</Link></Nav.Item>
      <Nav.Item key="video"><Link href="/video">Videos</Link></Nav.Item>
      <Nav.Item key="video-ssr"><Link href="/videossr">Video with SSR</Link></Nav.Item>
    </Nav>
    </div>
  )}
  
