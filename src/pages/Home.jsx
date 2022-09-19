import React from 'react';
import AwardsSection from "../components/awards-section/AwardsSection";
import LetsTry from "../components/letstry-section/LetsTry";

const Home = () => {
    return (
        <div className='home'>
            Home
            <AwardsSection />
            <LetsTry />
        </div>
    );
};

export default Home;