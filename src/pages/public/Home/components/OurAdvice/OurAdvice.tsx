import compra from '@/assets/images/compraa.svg';
import credit from '@/assets/images/credit.svg';
import arreglo from '@/assets/images/arreglo.svg';
import transporte from '@/assets/images/transporte.svg';
import seguro from '@/assets/images/seguro.svg';
import partes from '@/assets/images/partes.svg';
import { useTranslation } from 'react-i18next';

const OurAdvice = () => {
  const [t] = useTranslation("global")

  const listSteps = [
    { id: 1, step: `${t("OurAdvice.item1")}`, icon: compra },
    { id: 2, step: `${t("OurAdvice.item2")}`, icon: credit },
    { id: 3, step: `${t("OurAdvice.item3")}`, icon: seguro },
    { id: 4, step: `${t("OurAdvice.item4")}`, icon: arreglo },
    { id: 5, step: `${t("OurAdvice.item5")}`, icon: transporte },
    { id: 6, step: `${t("OurAdvice.item6")}`, icon: partes },
  ]
  return (
    <div className="OurAdvice" id='servicios'>
      <div className="container">
        <h1 className="title">{t("OurAdvice.title")}</h1>
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