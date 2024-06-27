import { Select } from 'antd';
// import LogoPng from '@/assets/images/logoV.png'
import LogoPng from '@/assets/images/logoGpt1.png'
import LogoWPng from '@/assets/images/logoww.webp'
import instaPng from '@/assets/images/insta.svg'
import facePng from '@/assets/images/face.svg'
import esPng from '@/assets/images/es.webp'
import enPng from '@/assets/images/en.svg'
import { Link } from 'react-router-dom';
import { Button, Popover } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select

const Header = () => {
  const [t, i18n] = useTranslation("global")
  const options = [
    { id: 1, title: `${t("header.home")}`, logo: LogoPng, to: "/" },
    { id: 2, title: "Nosotros", to: "#nosotros" },
    { id: 3, title: "Nuestros carros", to: "/product" },
    { id: 4, title: "Servicios", to: "#servicios" },
    { id: 5, title: "Contacto", to: "#footer" },
  ]
  const content = (
    <div className='flex'>
      {options?.map((item) => (
        <a href={item.to} key={item.id} className='animate'> {item.title}</a>
      ))}
      <a target='_blank' href="whatsapp://send?text=Hello World!&phone=+40745105043" className='button-header'>
        <img src={LogoWPng} alt='logo' className='logow' />
      </a>
    </div>
  );

  const lenguage = [
    { id: 1, label: <img src={esPng} alt='flag' className='flag' />, value: "es" },
    { id: 2, label: <img src={enPng} alt='flag' className='flag' />, value: "en" },
  ]

  const handleChange = (value: string) => {
    i18n.changeLanguage(value)
  };

  return (
    <div className="Header" id="top">
      <div className='pre-header'>
        <div className='logos container'>
          <div className='flex'>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=100079571356038">
              <img src={facePng} alt='network' className='red' />
            </a>
            <a target='_blank' href="Https://instagram.com/888.m.c.trading">
              <img src={instaPng} alt='network' className='red' />
            </a>
            <a target='_blank' href="whatsapp://send?text=Hello World!&phone=+40745105043">
              <img src={LogoWPng} alt='network' className='red' />
            </a>
          </div>
          <div className='len'>
            <a target='_blank' href="whatsapp://send?text=Hello World!&phone=+40745105043" className='phone'>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.77244 9.09467L7.9048 9.14394L8.01532 9.056L9.3736 7.97514L9.37598 7.97668L11.9283 9.62111L11.9283 9.62121L11.9349 9.62521C11.9986 9.66349 12.0525 9.71606 12.0924 9.77876C12.1322 9.84145 12.157 9.91256 12.1646 9.98646C12.1723 10.0604 12.1627 10.135 12.1365 10.2046C12.1104 10.2741 12.0684 10.3367 12.014 10.3872L12.0139 10.3871L12.0084 10.3926L10.8124 11.5739L10.8124 11.574C10.6705 11.7142 10.496 11.8171 10.3047 11.8735C10.1133 11.9299 9.91096 11.9381 9.71568 11.8972L9.71509 11.8971C7.4107 11.4212 5.28664 10.3067 3.58552 8.68107C1.92401 7.03999 0.77422 4.95216 0.27556 2.67066C0.234441 2.48079 0.243049 2.28351 0.300551 2.09793C0.358075 1.91228 0.462579 1.74465 0.603935 1.61126L0.603946 1.61127L0.605933 1.60936L1.84564 0.413404L1.84573 0.413494L1.85124 0.407832C1.90165 0.356024 1.96313 0.316292 2.03108 0.291612C2.09903 0.266931 2.17168 0.257943 2.24359 0.265318C2.3155 0.272694 2.38482 0.296243 2.44634 0.334202C2.50786 0.372161 2.56 0.423547 2.59885 0.484511L2.59878 0.484556L2.60241 0.48994L4.29853 3.005L3.19724 4.3287L3.10292 4.44207L3.15652 4.57946C3.55798 5.60834 4.18313 6.53509 4.98671 7.29267C5.77283 8.08918 6.7236 8.70422 7.77244 9.09467Z" fill="white" stroke="white" stroke-width="0.5" />
              </svg>
              +40 745 105 043
            </a>
            <Select
              defaultValue="en"
              onChange={handleChange}
            >
              {lenguage?.map((leng) => (
                <Option key={leng.id} value={leng.value}>{leng.label}</Option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <div className="items container">
        <Link to="/">
          <img src={LogoPng} alt='logo' className='logo' />
        </Link>
        <div className='flex'>
          {options?.map((item) => (
            <a href={item.to} key={item.id} className='animate'> {item.title}</a>
          ))}
          <a target='_blank' href="whatsapp://send?text=Hello World!&phone=+40745105043" className='button-header'>
            <img src={LogoWPng} alt='logo' className='logow' />
          </a>
        </div>
        <div className='responsive'>
          <Popover placement="bottomRight" content={content}>
            <Button className='button-header'>
              <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150">
                <g id="XMLID_240_">
                  <path id="XMLID_241_" d="M15,30h120c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,0,0,6.716,0,15S6.716,30,15,30z" />
                  <path id="XMLID_242_" d="M135,60H15C6.716,60,0,66.716,0,75s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,60,135,60z" />
                  <path id="XMLID_243_" d="M135,120H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,120,135,120z" />
                </g>
              </svg>
            </Button>
          </Popover>
        </div>
      </div>
    </div >
  )
}

export default Header