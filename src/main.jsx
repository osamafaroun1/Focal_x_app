import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ServicesSection } from './components/ServicesSection/ServicesSection.jsx'
import Hosting from './components/Hosting/Hosting.jsx'
const router = createBrowserRouter([
  {
    path: "/Focal_x_app",
    element: <App />,
    children: [
      {
        path: "/Focal_x_app",
        element: <LandingPage />,
        children: [
          {
            path: "/Focal_x_app/services",
            element:<ServicesSection  />
          },
          {
            path:"/Focal_x_app/hosting",
            element:<Hosting  />

          }
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
