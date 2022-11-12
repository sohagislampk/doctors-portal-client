import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalDental from '../ExceptinalDental/ExceptionalDental';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;