/* eslint-disable @typescript-eslint/no-explicit-any */
import carro from '@/assets/images/Red-Tesla-PNG-Images.png';
import camioneta from '@/assets/images/Volkswagen.png';
import useGlobalContext from '@/hooks/globalHooks';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [t] = useTranslation("global")
  const navigate = useNavigate();
  const { setMenu }: any = useGlobalContext();

  return (
    <div className="Products container">
      <h1 className="title">{t("Products.title")}</h1>
      <p className="subTitle">
        {t("Products.ourVehicles")}
      </p>
      <div className="cards">
        <Button onClick={() => { navigate("/product"); setMenu("aut") }} className="card">
          <span className='subTitle'>{t("Products.Automobiles")}</span>
          <img className='car car-1' src={carro} alt='car' />
        </Button>
        <Button onClick={() => { navigate("/product"); setMenu("cam") }} className="card">
          <span className='subTitle'>{t("Products.Vans")}</span>
          <img className='car' src={camioneta} alt='car' />
        </Button>
      </div>
    </div>
  )
}

export default Products