/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from '@/components/Header/Header'
import Banner from './components/Banner/Banner'
import CardCar from './components/CardCar/CardCar'
import dataAutomoviles from '@/common/utils/data_automoviles'
import dataCamionetas from '@/common/utils/data_camionetas'
import useGlobalContext from '@/hooks/globalHooks'

const Product = () => {
  const { isMenu }: any = useGlobalContext();

  return (
    <div className='Product'>
      <Header />
      <Banner />
      <div className='list container'>
        {isMenu !== "cam" &&
          dataAutomoviles?.map((car) => (
            <CardCar key={`${car.name}-${car.id}`} data={car} />
          ))
        }
        {isMenu !== "aut" &&
          dataCamionetas?.map((car) => (
            <CardCar key={`${car.name}-${car.id}`} data={car} />
          ))
        }
      </div>
    </div>
  )
}

export default Product