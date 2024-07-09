import { useTranslation } from "react-i18next"

const Welcome = () => {
  const [t] = useTranslation("global")
  return (
    <div className="Welcome container" id='nosotros'>
      <div className="column column-text">
        <span className="label">{t("welcome.aboutUs")}</span>
        <h1 className="title">M.C TRADING MOTORS</h1>
        <p className="body-regular">
          {t("welcome.text")}
        </p>
      </div>
    </div>
  )
}

export default Welcome