import React from 'react';
import './heroSection.scss';
import {StaticImage} from "gatsby-plugin-image";
import {RequestQuote} from "../../components/request-quote/RequestQuote";

export const HeroSection = () => {
    return (
        <div className={'hero'} id={'home'}>
            <div className={'hero__wrapper'}>
                <div className={'hero__wrapper__details'}>
                    <div className={'hero__wrapper__details__left'}>
                        <h1>Efficient and Dependable Home Maintenance Services</h1>
                        <p>If Its Broken, Cracked, Leaking, Loose, Sparkling, Noisy, Won’t Turn On,<strong>WE FIX
                            IT!</strong></p>
                    </div>
                    <div className={'hero__wrapper__details__right'}>
                        <StaticImage src={'../../images/hero-contractor.svg'}
                                     alt={'contractor image'}
                                     placeholder="tracedSVG"
                                     width={650}
                        />

                    </div>
                </div>
                <div className={'hero__wrapper__banner'}>
                    <div className={'hero__wrapper__banner__left'}>
                        <RequestQuote/>
                    </div>
                    <div className={'hero__wrapper__banner__right'}>

                    </div>
                </div>
            </div>
        </div>
    );
};
