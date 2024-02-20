import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Contact } from './pages/Contact.jsx'

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
        path: '/project_02/Contact',
        element: <Contact/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
