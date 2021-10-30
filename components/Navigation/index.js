import { Nav } from "@alifd/next";
import Link from "next/link";
export default function Navigation(){
  return <Nav
    className="top-nav"
    type="line"
    direction="hoz"
    header={<span className="fusion">Next start</span>}
    selectedKeys={[]}
  >
    <Nav.Item key="home"><Link href="/">Home</Link></Nav.Item>
    <Nav.Item key="video"><Link href="/video">Videos</Link></Nav.Item>
  </Nav>
} 
  
