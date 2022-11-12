import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButtons from '../../../Components/PrimaryButtons';
const ExceptionalDental = () => {
    return (
        <div className='lg:flex lg:justify-center lg:items-center lg:px-40 lg:py-20'>
            <div className=" lg:w-1/2 pr-8 ">
                <img className='rounded-lg' src={treatment} alt="" />
            </div>
            <div className='lg:w-1/2 pl-8  '>
                <h1 className='text-5xl font-bold'>Exceptional Dental Care, on Your Terms</h1>
                <p className='my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButtons>Get Started</PrimaryButtons>
            </div>
        </div>
    );
};

export default ExceptionalDental;