import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Root from './layout/Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import AddTouristsSpot from './pages/AddTouristsSpot/AddTouristsSpot';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AllSpot from './pages/AllSpot/AllSpot';
import MyList from './pages/MyList/MyList';
import UpdateSpot from './pages/UpdateSpot/UpdateSpot';
import SpotDetails from './pages/SpotDetails/SpotDetails';
import CountrySpot from './pages/CountrySpot/CountrySpot';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,

    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addTouristsSpot',
        element: <ProtectedRoute><AddTouristsSpot></AddTouristsSpot></ProtectedRoute>
      },
      {
        path: '/allTouristsSpot',
        element: <ProtectedRoute><AllSpot></AllSpot></ProtectedRoute>,
        loader: () => fetch('https://tourism-management-server-two.vercel.app/addSpot')
      },
      {
        path: '/myList',
        element: <ProtectedRoute><MyList></MyList></ProtectedRoute>
      },
      {
        path: '/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>
      },
      {
        path: '/spotDetails/:id',
        element: <ProtectedRoute><SpotDetails></SpotDetails></ProtectedRoute>
      },
      {
        path: '/countrySpot/:countryName',
        element: <CountrySpot></CountrySpot>

      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
    <ToastContainer />

  </React.StrictMode>,
)
