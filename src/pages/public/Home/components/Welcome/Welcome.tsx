
import PorschePng from '@/assets/images/repuesto.png'
const Welcome = () => {
  return (
    <div className="Welcome container" id='nosotros'>
      <div className="column column-text">
        <span className="label">Quiénes somos</span>
        <h1 className="title">M.C TRADING MOTORS</h1>
        <p className="body-regular">
          Somos Una empresa Nacida en al este da Europa "Romania"¡ Aficionada a los
          Motores Alcuano entre otros. Dedicada
          a la Vanta y Exportación da vehiculos nuevos y usados de Alta Gama, y port de Carros originales
          Prestamos un servicio Integral con Politicas da Honestidad y optimo
          Servicio para la comodidad y seguridad de nuestros clientes con buen Suio
        </p>
      </div>
      <div className="column column-image">
        <img src={PorschePng} alt='porsche' className='porsche' />
      </div>
    </div>
  )
}

export default Welcome