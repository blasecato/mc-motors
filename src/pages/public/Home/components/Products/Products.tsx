/* eslint-disable @typescript-eslint/no-explicit-any */
import carro from '@/assets/images/Red-Tesla-PNG-Images.png';
import camioneta from '@/assets/images/Volkswagen.png';
import useGlobalContext from '@/hooks/globalHooks';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const { setMenu }: any = useGlobalContext();

  return (
    <div className="Products container">
      <h1 className="title">Que estas buscando?</h1>
      <p className="subTitle">
        Nuestros vehiculos
      </p>
      <div className="cards">
        <Button onClick={() => { navigate("/product"); setMenu("aut") }} className="card">
          <span className='subTitle'>Automoviles</span>
          <img className='car car-1' src={carro} alt='car' />
        </Button>
        <Button onClick={() => { navigate("/product"); setMenu("cam") }} className="card">
          <span className='subTitle'>Camionetas</span>
          <img className='car' src={camioneta} alt='car' />
        </Button>
      </div>
    </div>
  )
}

export default Products