import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import './index.css'

import Root from './Pages/Root/Root'
import ErrorPage from './Pages/Root/error-page'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/About/About'
import Services from './Pages/Services/Services'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
            {
                path: 'services',
                element: <Services />
            }
        ]
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >
        <RouterProvider router={router} />
    </React.StrictMode>,
)
