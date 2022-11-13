import React from 'react';
import cbg from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div style={{
            background: `url(${cbg})`,
            backgroundSize: 'cover'
        }} className='text-center my-8 py-28'>
            <h2 className='text-xl text-primary font-bold'>Contact Us</h2>
            <p className='text-4xl text-white'>Stay Connect With Us</p>
            <form className='flex justify-center flex-col just gap-4 my-4'>
                <input type="text" placeholder="Email address" className="input mx-auto w-full max-w-xl" /><input type="text" placeholder="Subject" className="input mx-auto w-full max-w-xl" />
                <input type="text" placeholder="Your Message" className="input mx-auto input-bordered input-lg w-full max-w-xl" />
            </form>
        </div>
    );
};

export default ContactUs;