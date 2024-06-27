/* eslint-disable @typescript-eslint/no-explicit-any */
import useGlobalContext from "@/hooks/globalHooks";
import amgCar from "@/assets/images/amg-banner.jpg";
import { Button } from "antd"

const Banner = () => {
  const { isMenu, setMenu }: any = useGlobalContext();

  return (
    <div className="Banner-product container">
      <div className="box left">
        <img className="car" alt="car" src={amgCar} />
        <div className='menu'>
          <div className="content">
            <h1 className='title'>
              {isMenu === "all" && "Nuestros carros"}
              {isMenu === "aut" && "Nuestros automoviles"}
              {isMenu === "cam" && "Nuestras camionetas"}
            </h1>
            <div className="flex">
              <Button className={`button-menu button-menu-${isMenu === "all" && "active"}`} onClick={() => setMenu("all")}>Todos</Button>
              <Button className={`button-menu button-menu-${isMenu === "aut" && "active"}`} onClick={() => setMenu("aut")}>Automoviles</Button>
              <Button className={`button-menu button-menu-${isMenu === "cam" && "active"}`} onClick={() => setMenu("cam")}>Camionetas</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner