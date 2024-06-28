import { useTranslation } from "react-i18next"

const Welcome = () => {
  const [t] = useTranslation("global")
  return (
    <div className="Welcome container" id='nosotros'>
      <div className="column column-text">
        <span className="label">{t("welcome.aboutUs")}</span>
        <h1 className="title">M.C TRADING MOTORS</h1>
        <p className="body-regular">
          Somos Una empresa nacida en al este Europeo "Romania"¡ aficionada a los
          motores alemanes entre otros.
          Dedicada a la Vanta y exportación da vehiculos usados de alta gama y partes de carros originales.
          <br />
          Prestamos un servicio integral con politicas da honestidad y optimo
          servicio para la comodidad y seguridad de nuestros clientes de buen gusto.
        </p>
      </div>
    </div>
  )
}

export default Welcome