
import "../styles.scss";

import {
    PageHeader,
    FAQSection,
    HeroSection,   
    FooterSection,
    WhatWeDoSection,
    OurValuesSection,
    OurServiceSection,
    RepairProsTipsSection, 
} from '../sections';
import React from 'react';
import ContactUsSection from "../sections/contact-us-section/contactUsSection";

const HomePage = () => {
    return (
        <div>
            <PageHeader/>
            <HeroSection/>
            <WhatWeDoSection/>
            <OurServiceSection/>
            <RepairProsTipsSection/>
            <OurValuesSection/>
            <FAQSection/>
            <ContactUsSection/>
            <FooterSection/>
        </div>
    );
};

export default HomePage;
