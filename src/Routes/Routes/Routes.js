import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayouts from '../../Layouts/DashboardLayouts';


import Main from '../../Layouts/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Dashboard from '../../Pages/Dashboard/Dahsboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyAppointment from '../../Pages/MyAppointment/MyAppointment';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayouts /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])
export default router;