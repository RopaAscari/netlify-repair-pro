import './navigationBar.scss';
import React, {useState} from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";

const quoteIcon = '../../images/icons/quote-icon.svg'

export const NavigationBar = () => {

    const [navItems] = useState<Array<{ name: string, path: string, id: string }>>([
        {id: "#home", name: "Home", path: "/"},
        {id: "#our-values", name: "Our Values", path: "/"},
        {id: "#services", name: "Services", path: "/"},
        {id: "#repair-pro-tips", name: "Repair Tips", path: "/"},
        {id: "#faq", name: "FAQ's", path: "/"},
    ]);

    return (
        <div className={'nav-bar'}>
            <div className={'nav-bar__left'}>
                {
                    navItems.map(({name, id}) => (
                        <div key={name + id} className={'nav-bar__left__link'} onClick={() => scrollTo(id)}>{name}</div>
                    ))
                }

            </div>

            <div className={'nav-bar__right'}>
                <div className={'nav-bar__right__button'}>
                    <StaticImage src={quoteIcon} alt={'facebook icon'} placeholder="blurred"/>
                    <span>Make A Payment</span>
                </div>
            </div>
        </div>
    );
};
