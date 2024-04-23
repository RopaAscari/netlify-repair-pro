import React from 'react';
import './contactUsSection.scss';
import {Button} from "../../components/button/Button";

const ContactUsSection = () => {
    return (
        <div className={'contact-us-section'}>
            <div className={'contact-us-section__container'}>
                <div className={'image-container'}>
                    <div className={'image-container__image'}></div>
                    <div className={'image-container__image'}></div>
                    <div className={'image-container__image'}></div>
                </div>

                <h1>Still have questions?</h1>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <Button text={'Contact Us'} type={'primary'}/>
            </div>
        </div>
    );
};

export default ContactUsSection;
