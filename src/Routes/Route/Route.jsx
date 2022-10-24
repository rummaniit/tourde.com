import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ShowDetail from '../../Pages/ShowDetail/ShowDetail'
import Main from "../../Root/Main/Main";
import Privateroute from "../Privateroute/Privateroute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('https://dothetour-server.vercel.app/hotels')
                }
            },
            {
                path: '/hotel/:id',
                element: <Privateroute><ShowDetail></ShowDetail></Privateroute>,
                loader: ({ params }) => {
                    return fetch(`https://dothetour-server.vercel.app/hotels/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ])
    },

])
// https://dothetour-server.vercel.app/hotels/1