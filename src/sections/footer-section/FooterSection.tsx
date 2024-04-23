import React, {useState} from 'react';
import './footerSection.scss';
import {StaticImage} from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";

const logoIconPath = '../../images/icons/repair-pros-logo-icon.svg';
const phoneIconPath = '../../images/icons/phone-icon.svg';
const emailIconPath = '../../images/icons/email-icon.svg';
const locationIconPath = '../../images/icons/location-icon.svg';
const facebookIconPath = '../../images/icons/facebook-icon.svg';
const youtubeIconPath = '../../images/icons/youtube-icon.svg';
const twitterIconPath = '../../images/icons/twitter-icon.svg';
const instagramIconPath = '../../images/icons/instagram-icon.svg';


export const FooterSection = () => {

    const [navItems] = useState<Array<{ name: string, path: string, id: string }>>([
        {id: "#home", name: "Home", path: "/"},
        {id: "#our-values", name: "Our Values", path: "/"},
        {id: "#services", name: "Services", path: "/"},
        {id: "#repair-pro-tips", name: "Repair Tips", path: "/"},
        {id: "#faq", name: "FAQ's", path: "/"},
    ]);

    return (
        <div className={'footer'}>
            <div className={'footer__wrapper'}>
                <div className={'footer__wrapper__left'}>
                    <div className={'footer__wrapper__left__top'}>
                        <div className={'footer__wrapper__left__top__image'}>
                            <StaticImage src={logoIconPath} alt={'Repair Pros Logo'} placeholder="tracedSVG"/>
                        </div>
                        <div className={'footer__wrapper__left__top__nav'}>
                            <span>Page Sections</span>
                            <div className={'footer__wrapper__left__top__nav__items'}>
                                {
                                    navItems.map(({name, id}) => (
                                        <div key={name + id}
                                             className={'footer__wrapper__left__top__nav__items__item'}
                                             onClick={() => scrollTo(id)}>{name}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={'footer__wrapper__left__bottom'}>
                        <p>© 2020 Repair Pros. All rights reserved</p>
                        <p><span>Opening Hours:</span> Monday - Saturday 8:30AM - 5PM</p>
                    </div>
                </div>
                <div className={'footer__wrapper__right'}>
                    <div className={'footer__wrapper__right__contact'}>
                        <span>Social Media Links</span>
                        <div className={'footer__wrapper__right__contact__container'}>
                            <div className={'footer__wrapper__right__contact__container__item'}>
                                <div className={'footer__wrapper__right__contact__container__item__left'}>
                                    <StaticImage src={phoneIconPath} alt={'facebook icon'} placeholder="blurred"/>
                                </div>
                                <div className={'footer__wrapper__right__contact__container__item__right'}>
                                    +1 (876) 802-4187
                                </div>
                            </div>
                            <div className={'footer__wrapper__right__contact__container__item'}>
                                <div className={'footer__wrapper__right__contact__container__item__left'}>
                                    <StaticImage src={emailIconPath} alt={'facebook icon'} placeholder="blurred"/>
                                </div>
                                <div className={'footer__wrapper__right__contact__container__item__right'}>
                                    prorequest@repairprosja.com
                                </div>
                            </div>
                            <div className={'footer__wrapper__right__contact__container__item'}>
                                <div className={'footer__wrapper__right__contact__container__item__left'}>
                                    <StaticImage src={locationIconPath} alt={'facebook icon'} placeholder="blurred"/>
                                </div>
                                <div className={'footer__wrapper__right__contact__container__item__right'}>
                                    Russell Heights, Kingston, Jamaica
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'footer__wrapper__right__social'}>
                        <span>Social Media Links</span>
                        <div className={'footer__wrapper__right__social__container'}>
                            <StaticImage src={facebookIconPath} alt={'facebook icon'} placeholder="blurred"/>
                            <StaticImage src={youtubeIconPath} alt={'youtube icon'} placeholder="blurred"/>
                            <StaticImage src={twitterIconPath} alt={'twitter icon'} placeholder="blurred"/>
                            <StaticImage src={instagramIconPath} alt={'instagram icon'} placeholder="blurred"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};