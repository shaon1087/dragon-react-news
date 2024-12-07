import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Career from "../Pages/Career/Career";
import About from "../Pages/About/About";
import NewsCategory from "../Pages/NewsCategory/NewsCategory";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>This page Under Development</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
      {
         path: '/category/:id',
         element: <NewsCategory></NewsCategory>,
         loader: ()=>fetch('/news.json')
      },
      {
        path: "/news/:id",
        element: 
          <PrivateRoutes>
            <NewsDetails></NewsDetails>
          </PrivateRoutes>,
          loader: ()=>fetch('/news.json')
      },
    ],
  },
]);

export default routes;