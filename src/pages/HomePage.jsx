import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const Services = lazy(() => import('../components/Services'));
const Concept = lazy(() => import('../components/Concept'));
const ForRelatives = lazy(() => import('../components/ForRelatives'));
const FAQ = lazy(() => import('../components/FAQ'));

const HomePage = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={<div className="h-40" />}>
                <Concept />
                <Services />
                <ForRelatives />
                <FAQ />
            </Suspense>
        </>
    );
};

export default HomePage;
