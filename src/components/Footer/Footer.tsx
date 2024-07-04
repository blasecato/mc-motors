import LogoPng from '@/assets/images/logoV.png'
import LogoWPng from '@/assets/images/logoww.webp'
import instaPng from '@/assets/images/insta.svg'
import facePng from '@/assets/images/face.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t] = useTranslation("global")

  return (
    <div className="Footer" id='footer'>
      <div className='flex container'>
        <div className="column">
          <img className="logo" alt="logo" src={LogoPng} />
        </div>
        <div className="column">
          <h1 className='title'>{t("footer.ContactUs")}:</h1>
          <a target='_blank' href={`whatsapp://send?text=${t("header.mss")}&phone=+40745105043`} className='item'>{t("footer.cellPhone")} <span>+40 745 105 043</span></a>
          <a target='_blank' href='mailto:888.m.c.trading@gmail.com' className='item'>{t("footer.email")} <span>888.m.c.trading@gmail.com</span></a>
          <a target='_blank' href='https://www.google.com/maps/place/Strada+%C8%98tefan+cel+Mare,+Ruman%C3%ADa/@47.4739421,22.5694596,18z/data=!4m10!1m2!2m1!1sStrada+Stefan+Cel+Mare+%2362+Tasnad+!3m6!1s0x4747e63120e3e907:0xc428a32a004f3691!8m2!3d47.4737853!4d22.5705392!15sCiFTdHJhZGEgU3RlZmFuIENlbCBNYXJlICM2MiBUYXNuYWSSAQVyb3V0ZeABAA!16s%2Fg%2F1tdvt2qj?entry=ttu' className='item'>{t("footer.location")} <span>Strada Stefan Cel Mare #62 Tasnad - Satu.Mare Romania</span></a>
        </div>
        <div className="column">
          <h1 className='title'>{t("footer.Networks")}</h1>
          <div className='flex'>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=100079571356038">
              <img src={facePng} alt='network' className='red' />
            </a>
            <a target='_blank' href="Https://instagram.com/888.m.c.trading">
              <img src={instaPng} alt='network' className='red' />
            </a>
            <a target='_blank' href={`whatsapp://send?text=${t("header.mss")}&phone=+40745105043`}>
              <img src={LogoWPng} alt='network' className='red' />
            </a>
          </div>
        </div>
      </div>
      <div className='divider container'>
        <h3 className='body-regular'>{t("footer.foo")}</h3>
      </div>
    </div>
  )
}

export default Footer