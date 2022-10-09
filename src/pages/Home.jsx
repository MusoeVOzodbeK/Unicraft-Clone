import React from 'react';
import AwardsSection from "../components/awards-section/AwardsSection";
import LetsTry from "../components/letstry-section/LetsTry";
import {Link} from "react-router-dom";import LogRocket from 'logrocket';

const Home = () => {
    LogRocket.init('kcd91g/test');
    return (
        <div className='home'>
            <div className='center'>
                Home
                <Link to='/functional' style={{fontWeight: 700, fontSize: 20}}>Functional Page</Link>
            </div>
            <AwardsSection />
            <LetsTry />
        </div>
    );
};

export default Home;