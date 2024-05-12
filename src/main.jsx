import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/about",
        element:<About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
