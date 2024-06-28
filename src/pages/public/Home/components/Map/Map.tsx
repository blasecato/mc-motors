/* eslint-disable @typescript-eslint/no-explicit-any */

import { Map, Overlay } from "pigeon-maps"
import eng from '@/assets/images/en.svg'
import pol from '@/assets/images/pol.svg'
import esp from '@/assets/images/es.webp'
import fra from '@/assets/images/fran.webp'
import ale from '@/assets/images/alemania.avif'
import hun from '@/assets/images/hun.png'
import rum from '@/assets/images/rum.png'
import { useTranslation } from "react-i18next"

const PageMap = () => {
  const [t] = useTranslation("global")

  const listCities = [
    { id: 1, name: `${t("map.ro")}`, logo: rum, coordinates: [45.777792, 24.978009] },
    { id: 4, name: `${t("map.en")}`, logo: eng, coordinates: [54.065521, -1.458729] },
    { id: 2, name: `${t("map.es")}`, logo: esp, coordinates: [39.419019, -3.175400] },
    { id: 3, name: `${t("map.al")}`, logo: ale, coordinates: [50.849259, 10.538038] },
    { id: 6, name: `${t("map.hu")}`, logo: hun, coordinates: [46.819631, 19.480451] },
    { id: 5, name: `${t("map.po")}`, logo: pol, coordinates: [52.569981, 18.583384] },
    { id: 7, name: `${t("map.fr")}`, logo: fra, coordinates: [46.278261, 3.441174] },
  ]
  return (
    <div className="Map container">
      <div className="column column-map">
        <Map minZoom={2} height={400} defaultCenter={[46.542535, 14.783962]} defaultZoom={4}>
          {listCities?.map((city: any) => (
            <Overlay anchor={city?.coordinates} key={city.id}>
              <img src={city.logo} width={30} height={20} alt='flag' />
            </Overlay>
          ))}

        </Map>
      </div>
      <div className="column column-text">
        <h1 className="subTitle">{t("map.languages")}</h1>
        <div className="list">
          {listCities?.map((city) => (
            <div className="item" key={city.id}>
              <img src={city.logo} width={30} height={20} alt='flag' />
              <span className="body-regular">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageMap