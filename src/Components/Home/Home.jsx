import React from 'react';
import CourseSlider from './CourseSlider';
import JoinSeminer from './JoinSeminer';
import WordExpert from './WordExpert';
import CardHome from './CardHome';
import CourseSelection from './CourseSelection';
import Layout from '../Layout/Layout';

const Home = () => {
    return (
        <Layout>
            
<CourseSlider/>
<JoinSeminer/>
<WordExpert/>
<CardHome/>
<CourseSelection/>
        </Layout>
    );
};

export default Home;