import React from 'react';
import InformationSection from '../../components/InformationSection/InformationSection';

const HomePage = () => {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <h3 className='text-center text-2xl md:text-3xl lg:text-4xl py-8 font-bold '>Client Information of Leadzen</h3>

            <InformationSection />
        </div>
    );
};

export default HomePage;