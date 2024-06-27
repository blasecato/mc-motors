import compra from '@/assets/images/compraa.svg';
import credit from '@/assets/images/credit.svg';
import arreglo from '@/assets/images/arreglo.svg';
import transporte from '@/assets/images/transporte.svg';
import seguro from '@/assets/images/seguro.svg';
import partes from '@/assets/images/partes.svg';

const OurAdvice = () => {
  const listSteps = [
    { id: 1, step: "Compra de tu nuevo vehiculo.", icon: compra },
    { id: 2, step: "Te ayudamos con tu crédito.", icon: credit },
    { id: 3, step: "Te asistimos con el seguro de tu vehiculo.", icon: seguro },
    { id: 4, step: "Contribuimos al mantenimiento de tu vehiculo.", icon: arreglo },
    { id: 5, step: "Te ayudamos con el transporte de maquinaria pesada.", icon: transporte },
    { id: 6, step: "Proporcionamos partes de carros originales, si asi lo requiere tu nuevo vehiculo.", icon: partes },
  ]
  return (
    <div className="OurAdvice" id='servicios'>
      <div className="container">
        <h1 className="title">Proceso de nuestra asesoria</h1>
        <div className="list">
          {listSteps?.map((step) => (
            <div className="list-item" key={step.id}>
              <img src={step.icon} alt='icon' className='icon' />
              <div>
                <div className="circle">
                  <span className="number">{step.id}</span>
                </div>
                <p className="body-small">{step.step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurAdvice