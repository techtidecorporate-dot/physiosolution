import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Concept from '../components/Concept';
import ForRelatives from '../components/ForRelatives';
import FAQ from '../components/FAQ';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Concept />
            <Services />
            <ForRelatives />
            <FAQ />
        </>
    );
};

export default HomePage;
