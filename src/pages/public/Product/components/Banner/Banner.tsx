/* eslint-disable @typescript-eslint/no-explicit-any */
import useGlobalContext from "@/hooks/globalHooks";
import amgCar from "@/assets/images/amg-banner.jpg";
import { Button } from "antd"
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [t] = useTranslation("global")
  const { isMenu, setMenu }: any = useGlobalContext();

  return (
    <div className="Banner-product container">
      <div className="box left">
        <img className="car" alt="car" src={amgCar} />
        <div className='menu'>
          <div className="content">
            <h1 className='title'>
              {isMenu === "all" && `${t("ourCars.ourCars")}`}
              {isMenu === "aut" && `${t("ourCars.ourCars1")}`}
              {isMenu === "cam" && `${t("ourCars.ourCars2")}`}
            </h1>
            <div className="flex">
              <Button className={`button-menu button-menu-${isMenu === "all" && "active"}`} onClick={() => setMenu("all")}>{t("ourCars.all")}</Button>
              <Button className={`button-menu button-menu-${isMenu === "aut" && "active"}`} onClick={() => setMenu("aut")}>{t("ourCars.automobiles")}</Button>
              <Button className={`button-menu button-menu-${isMenu === "cam" && "active"}`} onClick={() => setMenu("cam")}>{t("ourCars.vans")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner