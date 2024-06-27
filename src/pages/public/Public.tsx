import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Layout from "@/components/Layout/Layout";
// import Page404 from "../../components/Organims/404/404";

const RouterPublic = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
        // loader: loaderClients,
        // errorElement: <Page404 />,
      },
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      // {
      //   path: "/cliente/:clientId/editar",
      //   element: <EditClient />,
      //   loader: loaderEditClient,
      //   errorElement: <Page404 />,
      // },
    ],
  },
]);

export default RouterPublic;
