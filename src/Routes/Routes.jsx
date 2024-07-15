import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home> 
            },
            {
                path:'/Login',
                element:<Login></Login>
            }
        ]
    }
])

export default routes;