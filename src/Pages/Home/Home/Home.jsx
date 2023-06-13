import React from 'react';
import Banner from './Banner/Banner';
import Gallary from './Gallary/Gallary';
import SliderPage from '../SliderPage/SliderPage';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import ContactPage from './ContactPage/ContactPage';
import ExtraSection from './Extra section/ExtraSection';

const Home = () => {
               return (
                              <div>
                                <Banner></Banner>   
                                <Gallary></Gallary>   
                                <SliderPage></SliderPage>   
                                <PopularClass></PopularClass> 
                                <ContactPage></ContactPage>
                                <PopularInstructor></PopularInstructor> 
                                <ExtraSection></ExtraSection> 
                              </div>
               );
};

export default Home;