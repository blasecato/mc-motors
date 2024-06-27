/* eslint-disable @typescript-eslint/no-explicit-any */

import { Map, Overlay } from "pigeon-maps"
import eng from '@/assets/images/en.svg'
import pol from '@/assets/images/pol.svg'
import esp from '@/assets/images/es.webp'
import fra from '@/assets/images/fran.webp'
import ale from '@/assets/images/alemania.avif'
import hun from '@/assets/images/hun.png'
import rum from '@/assets/images/rum.png'

const PageMap = () => {
  const listCities = [
    { id: 1, name: "Rumano", logo: rum, coordinates: [45.777792, 24.978009] },
    { id: 4, name: "Ingles", logo: eng, coordinates: [54.065521, -1.458729] },
    { id: 2, name: "Español", logo: esp, coordinates: [39.419019, -3.175400] },
    { id: 3, name: "Aleman", logo: ale, coordinates: [50.849259, 10.538038] },
    { id: 6, name: "Hungaro", logo: hun, coordinates: [46.819631, 19.480451] },
    { id: 5, name: "Polaco", logo: pol, coordinates: [52.569981, 18.583384] },
    { id: 7, name: "Frances", logo: fra, coordinates: [46.278261, 3.441174] },
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
        <h1 className="subTitle">Te brindamos asesorias de compra y venta directa en <span className="yell">7</span> idiomas</h1>
        {listCities?.map((city) => (
          <div className="item" key={city.id}>
            <img src={city.logo} width={30} height={20} alt='flag' />
            <span className="body-regular">{city.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageMap