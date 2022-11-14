import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoitments from '../AvailableAppointment/AvailableAppoitments';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppoitments
                selectedDate={selectedDate}>
            </AvailableAppoitments>
        </div>
    );
};

export default Appointment;