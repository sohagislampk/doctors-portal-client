import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Appointment from '../../Appointment/Appointment/Appointment';

import Main from '../../Layouts/Main';
import Home from '../../Pages/Home/Home/Home';

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
            }

        ]
    }
])
export default router;