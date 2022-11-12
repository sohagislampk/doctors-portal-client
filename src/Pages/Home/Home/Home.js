import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalDental from '../ExceptinalDental/ExceptionalDental';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
        </div>
    );
};

export default Home;