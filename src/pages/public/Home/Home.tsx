import Banner from './components/Banner/Banner'
import PageMap from './components/Map/Map'
import OurAdvice from './components/OurAdvice/OurAdvice'
import Products from './components/Products/Products'
import Welcome from './components/Welcome/Welcome'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <div className='Home'>
      <Banner />
      <Welcome />
      <PageMap />
      <OurAdvice />
      <Products />
      <WhyChooseUs />

    </div>
  )
}

export default Home