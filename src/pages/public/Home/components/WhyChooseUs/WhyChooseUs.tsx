import agilidad from '@/assets/images/agilidad.svg';
import precios from '@/assets/images/precios.svg';
import seguridad from '@/assets/images/seguridad.svg';
import servicios from '@/assets/images/servicios.svg';

import col from '@/assets/images/col.webp'
import pol from '@/assets/images/pol.svg'
import esp from '@/assets/images/es.webp'
import lux from '@/assets/images/lux.png'
import ale from '@/assets/images/alemania.avif'
import hun from '@/assets/images/hun.png'
import rum from '@/assets/images/rum.png'
import bul from '@/assets/images/bulgaria.svg'
import bannerPng from '@/assets/images/bannerc9.svg'
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const [t] = useTranslation("global")

  const items = [
    { id: 1, text: `${t("WhyChooseUs.item1")}`, icon: precios },
    { id: 2, text: `${t("WhyChooseUs.item2")}`, icon: agilidad },
    { id: 3, text: `${t("WhyChooseUs.item3")}`, icon: servicios },
    { id: 4, text: `${t("WhyChooseUs.item4")}`, icon: seguridad },
  ]
  const listCities = [
    { id: 1, name: `${t("WhyChooseUs.ro")}`, logo: rum },
    { id: 3, name: `${t("WhyChooseUs.es")}`, logo: esp },
    { id: 2, name: `${t("WhyChooseUs.lex")}`, logo: lux },
    { id: 5, name: `${t("WhyChooseUs.al")}`, logo: ale },
    { id: 4, name: `${t("WhyChooseUs.pol")}`, logo: pol },
    { id: 6, name: `${t("WhyChooseUs.col")}`, logo: col },
    { id: 7, name: `${t("WhyChooseUs.hu")}`, logo: hun },
    { id: 8, name: `${t("WhyChooseUs.bul")}`, logo: bul },
  ]
  return (
    <div className="WhyChooseUs">
      <div className='container'>
        <h1 className="title">{t("WhyChooseUs.title")}</h1>
        <div className="content">
          <div className="column text">
            <div className='list'>
              {items?.map((item) => (
                <div className="item" key={item.id}>
                  <img src={item.icon} alt='icon' className='icon' />
                  <span className="subTitle">{item.text}</span>
                </div>
              ))}
            </div>
            <span className='subTitle'>
              {t("WhyChooseUs.text")}
            </span>
          </div>
        </div>

      </div>
      <div className='note'>
        <div className='container'>
          <img src={bannerPng} className='banner' alt='banner' />
          <div className='box'></div>
          <p className='subTitle'>
            {t("WhyChooseUs.textImportant")}
            <br />
          </p>
        </div>
      </div>
      <div className='container'>
        <h1 className="title">{t("WhyChooseUs.alliedCountries")}</h1>
        <div className='cities'>
          {listCities?.map((city) => (
            <div className='city' key={city.id}>
              <p className='subTitle'>{city.name}</p>
              <img src={city.logo} alt='flag' className='flag' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs