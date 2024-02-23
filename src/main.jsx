import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Exhibitor } from './pages/Exhibitor.jsx'
import { Layout } from './pages/Layout.jsx'
import { ExhibitorPage } from './pages/ExhibitorPage.jsx'
import { LayoutPage } from './pages/LayoutPage.jsx'

const router = createBrowserRouter([
  {
    path: '/project_02/',
    element: <App/>,
    children: [
      {
        path: '/project_02/',
        element: <Home/>,
      },
      {
        path: '/project_02/Exhibitor',
        element: <ExhibitorPage/>,
      },
      {
        path: '/project_02/Layout',
        element: <LayoutPage/>,
      },
      ,
      {
        path: '/project_02/ExhibitorTest',
        element: <Exhibitor/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
