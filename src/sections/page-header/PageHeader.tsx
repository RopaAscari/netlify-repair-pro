import React from 'react';
import './pageHeader.scss';
import {NavigationBar} from "../../components";
import {StaticImage} from "gatsby-plugin-image"


const facebookIconPath = '../../images/icons/facebook-icon.svg';
const youtubeIconPath = '../../images/icons/youtube-icon.svg';
const twitterIconPath = '../../images/icons/twitter-icon.svg';
const instagramIconPath = '../../images/icons/instagram-icon.svg';

const phoneIconPath = '../../images/icons/phone-icon.svg';
const emailIconPath = '../../images/icons/email-icon.svg';
const locationIconPath = '../../images/icons/location-icon.svg';

const logoIconPath = '../../images/icons/repair-pros-logo-icon.svg';


export const PageHeader: React.FC = () => {
    return (
        <div className={'page-header'}>
            <div className={'page-header__top'}>
                <div className={'page-header__top__hours'}>
                    <span>Opening Hours: Monday - Friday : <span>8:30AM - 5:00PM</span></span>
                </div>
                <div className={'page-header__top__socials'}>
                    <StaticImage src={facebookIconPath} alt={'facebook icon'} placeholder="blurred"/>
                    <StaticImage src={youtubeIconPath} alt={'youtube icon'} placeholder="blurred"/>
                    <StaticImage src={twitterIconPath} alt={'twitter icon'} placeholder="blurred"/>
                    <StaticImage src={instagramIconPath} alt={'instagram icon'} placeholder="blurred"/>
                </div>
            </div>

            <div className={'page-header__middle'}>

                <div className={'page-header__middle__logo'}>
                    <StaticImage src={logoIconPath} alt={'Repair Pros Logo'} placeholder="tracedSVG"/>
                </div>

                <div className={'page-header__middle__details'}>
                    <div className={'page-header__middle__details__item'}>
                        <div className={'page-header__middle__details__item__left'}>
                            <StaticImage src={phoneIconPath} alt={'phone icon'} placeholder="blurred"/>
                        </div>
                        <div className={'page-header__middle__details__item__right'}>
                            <h2>Give Us A Call</h2>
                            <p>+1 (876) 802-4187</p>
                        </div>
                    </div>

                    <div className={'page-header__middle__details__item'}>
                        <div className={'page-header__middle__details__item__left'}>
                            <StaticImage src={locationIconPath} alt={'location icon'} placeholder="blurred"/>
                        </div>
                        <div className={'page-header__middle__details__item__right'}>
                            <h2>Office Location</h2>
                            <p>Russell Heights, Kingston, Jamaica</p>
                        </div>
                    </div>

                    <div className={'page-header__middle__details__item'}>
                        <div className={'page-header__middle__details__item__left'}>
                            <StaticImage src={emailIconPath} alt={'email icon'} placeholder="blurred"/>
                        </div>
                        <div className={'page-header__middle__details__item__right'}>
                            <h2>Email Us</h2>
                            <p>prorequest@repairprosja.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'page-header__navigation'}>
                <NavigationBar/>
            </div>

        </div>
    );
};
