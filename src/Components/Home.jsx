import React from 'react';
import Banner from './Banner';
import About from './About';
import Success from './Success';
import Feedback from './Feedback';
import WhyLearn from './WhyLearn';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section >
                <Banner></Banner>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Success></Success>
            </section>
            <section className=' p-5 my-10 bg-gray-100'>
                <Feedback></Feedback>
            </section>
            <section>
                <WhyLearn></WhyLearn>
            </section>
            
        </div>
    );
};

export default Home;