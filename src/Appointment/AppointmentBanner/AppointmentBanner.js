import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
const AppointmentBanner = () => {
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-lg rounded-lg shadow-2xl" />
                    <div className='mr-6 sm:w-full'>
                        <DayPicker
                            mode='single'

                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;