import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
import whatPng from '@/assets/images/what.png';

const Layout = () => {
  return (
    <div className='App-global'>
      <Outlet />
      <Footer />
      <a target='_blank' href='whatsapp://send?text=Hello World!&phone=+40745105043' className='stiky'>
        <img src={whatPng} alt='whatsapp' />
      </a>
    </div>
  )
}

export default Layout