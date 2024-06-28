
import Header from '@/components/Header/Header'
import { Button, Carousel } from 'antd';
import Slider from "react-slick";
import teslaPng from '@/assets/images/Red-Tesla-PNG-Images.png'
// import audiPng from '@/assets/images/Audi.png'
import volPng from '@/assets/images/Volkswagen.png'
import merPng from '@/assets/images/merc.png'

import logoTPng from '@/assets/images/logotesla.png'
import logoRanger from '@/assets/images/logoRanger.png'
import logoVol from '@/assets/images/logoVol.png'
import logomer from '@/assets/images/logomer.png'
import logoporshe from '@/assets/images/logoporshe.png'
import audilogo from '@/assets/images/audilogo.png'
import bmwPng from '@/assets/images/logoBmw.png'


const Banner = () => {
  const listBrands = [
    { id: 1, name: "Tesla", logo: logoTPng },
    { id: 2, name: "Range rover", logo: logoRanger },
    { id: 6, name: "BMW", logo: bmwPng },
    { id: 3, name: "Porsche", logo: logoporshe },
    { id: 4, name: "volkswagen", logo: logoVol },
    { id: 7, name: "Audi", logo: audilogo },
    { id: 5, name: "Mercedes benz", logo: logomer },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  return (
    <div className='Banner'>
      <Header />
      <div className='container'>
        <Carousel arrows autoplay autoplaySpeed={10000}>
          <div className='item'>
            <div className='item-content' style={{ borderColor: "rgb(254 214 3)" }}>
              <h3 className='subTitle' style={{ color: "rgb(254 214 3)" }}>M.C. Motors</h3>
              <h1 className='title'>Los mejores carros usados en toda europa</h1>
              <Button className='button-banner' style={{ borderColor: "rgb(254 214 3)" }}>Hola</Button>
            </div>
            <img className='car' src={merPng} alt='car' />
          </div>
          <div className='item'>
            <div className='item-content' style={{ borderColor: "rgb(255, 255, 255)" }}>
              <h3 className='subTitle' style={{ color: "rgb(255, 255, 255)" }}>M.C. Motors</h3>
              <h1 className='title'>Los mejores carros nuevos en toda europa</h1>
              <Button className='button-banner' style={{ borderColor: "rgb(255, 255, 255)" }}>Hola</Button>
            </div>
            <img className='car' src={volPng} alt='car' />
          </div>
          <div className='item'>
            <div className='item-content' style={{ borderColor: "rgb(140 0 5)" }}>
              <h3 className='subTitle' style={{ color: "rgb(140 0 5)" }}>M.C. Motors</h3>
              <h1 className='title'>Los mejores repuestos originales</h1>
            </div>
            <img className='car' src={teslaPng} alt='car' />
          </div>
          {/* <div className='item'>
            <div className='item-content' style={{ borderColor: "rgb(140, 140, 140)" }}>
              <h3 className='subTitle' style={{ color: "rgb(140, 140, 140)" }}>M.C. Motors</h3>
              <h1 className='title'>Texto big titulo del banner</h1>
              <Button className='button-banner' style={{ borderColor: "rgb(140, 140, 140)", color: "rgb(140, 140, 140)" }}>Hola</Button>
            </div>
            <img className='car' src={audiPng} alt='car' />
          </div> */}
        </Carousel>
      </div>
      <div className='brands container'>
        <div className='brands-c'>
          <div className='mask-l' />
          <div className='mask-r' />
          <Slider {...settings}>
            {listBrands?.map((item) => (
              <div className='brand' key={item.id}>
                <img className='brand-logo' src={item.logo} alt='logoCar' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Banner