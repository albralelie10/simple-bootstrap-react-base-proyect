import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Layout } from './components/Layout'
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {About} from "./pages/About"
import { CanvasItems } from './components/barra_lateral/CanvasItems'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },{
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        element:<CanvasItems/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
