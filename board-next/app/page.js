import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Login from './Login'
export default function Home() {
  return (
  <div>
      <p className='hello'><Link href="board/list">Hello World</Link></p>
      <p className='hello'><Link href="Login">Login</Link></p>
      <Login></Login>
    </div>
  )
}