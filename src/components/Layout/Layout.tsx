import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
import whatPng from '@/assets/images/what.png';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const [t] = useTranslation("global")

  return (
    <div className='App-global'>
      <Outlet />
      <Footer />
      <a target='_blank' href={`whatsapp://send?text=${t("header.mss")}&phone=+40745105043`} className='stiky'>
        <img src={whatPng} alt='whatsapp' />
      </a>
    </div>
  )
}

export default Layout