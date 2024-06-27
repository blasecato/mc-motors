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
const WhyChooseUs = () => {
  const items = [
    { id: 1, text: "Mejores precios.", icon: precios },
    { id: 2, text: "Agilidad.", icon: agilidad },
    { id: 3, text: "Multiservicios.", icon: servicios },
    { id: 4, text: "Seguridad.", icon: seguridad },
  ]
  const listCities = [
    { id: 1, name: "Rumanía", logo: rum },
    { id: 3, name: "España", logo: esp },
    { id: 2, name: "Luxemburgo", logo: lux },
    { id: 5, name: "Alemania", logo: ale },
    { id: 4, name: "Polonia", logo: pol },
    { id: 6, name: "Colombia", logo: col },
    { id: 7, name: "Hungría", logo: hun },
  ]
  return (
    <div className="WhyChooseUs">
      <div className='container'>
        <h1 className="title">Por que elegirnos?</h1>
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
              Los carros nuevos pierden su valor, unos
              rapidamente hasta un 30% en el primer año, por esto tu opcion mas inteligente es adquirir un carro usado de alta gama, por un precio considerable de un modalo que conservan las mismas espacificaciones de uno nuevo.
            </span>
          </div>
        </div>

      </div>
      <div className='note'>
        <div className='container'>
          <p className='title'>
            Importante:
          </p>
          <p className='subTitle'>
            Si deseas emprender tu negocio  automotor, te ofrecemos precios mayoristas por la compra de varios Vehículos; con toda la asesoría personalizada de exportacion, Aduanas, el mercado en la Unión Europea y Latino América.
            <br /><br />
            Contactanos...
          </p>
        </div>
      </div>
      <div className='container'>
        <h1 className="title">Paises aliados</h1>
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