import React from 'react';
import './faqSection.scss'
import {StaticImage} from "gatsby-plugin-image";
import {Accordion, Panel} from "../../components/accordion/Accordion";

export const FAQSection = () => {

    const questions: Array<Panel> = [
        {
            id: 0,
            question: "Are estimates free?",
            answer: "Estimates provided over the phone and email are free. If you require a quote in person we do have a trip charge that, depending on the final cost of the project, we will refund it in your final invoice, if the job bid is approved"
        },
        {
            id: 1,
            question: "Do you charge by the job or by the hour?",
            answer: "We charge by the job, NOT by the hour for most jobs. When we estimate jobs, we give price estimates or range of cost of labor for a complete project or job. The reason why we charge by the job is really a benefit to our customers, so that if a project runs for longer than expected the customer will be charged the estimated price. The jobs that get priced by the hour are furniture assembly, electrical troubleshooting and repair, and drywall and paint touch up throughout a home."
        },
        {
            id: 2,
            question: "Do I provide the materials necessary for my project?",
            answer: "In some cases we prefer that you purchase some of the items needed for a job. Items such as light fixtures, faucets, toilets, shelves, ceiling fans, tile, laminate flooring, and others that are to our customer's liking or preference. Other items such as drywall (and other pertinent materials related to drywall repairs), wires, cables, junction boxes, and other specific parts for repairs are better purchased by us, so that we get the correct ones. Although in some instances we can give our customers a \"shopping list\" to allow them to purchase all the materials and parts. "
        },
        {
            id: 3,
            question: "How do I pay for any services rendered at my property?",
            answer: "Cash and check are preferred methods of payment, but we do accept credit or debit cards (3% card processing fee added to all jobs), or direct ACH deposits."
        },
        {
            id: 4,
            question: "Is your business insured?",
            answer: "We are fully insured with a general liability policy to protect your home in the unlikely event of an accident. Our employees are also insured with a worker's compensation policy to protect our handymen while on the jobs sites and enroute."
        },
        {
            id: 5,
            question: "Do you require a deposit?",
            answer: "We only require a deposit for costly materials (especial orders for doors, windows, flooring, paint, and others), if the cost is more than USD $1000. Any refunds would require a re-stocking fee, depending on the supply company policies."
        }
    ]

    return (
        <div id={'faq'} className={'faq'}>
            <div className={'faq__top'}>
                <div className={"faq__top__left"}>
                    <span id={'section-heading'}>Frequently Ask Questions</span>
                    <h1>Here are a few questions generally asked</h1>
                </div>
                <div className={"faq__top__right"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor praesent nibh phasellus lobortis.
                        Tristique porta quis ultricies placerat arcu tristique phasellus in.</p>
                </div>
            </div>
            <div className={'faq__bottom'}>
                <div className={'faq__bottom__wrapper'}>
                    <div className={'faq__bottom__wrapper__left'}>
                        <StaticImage src={"../../images/pointing_lady.png"} alt={'facebook icon'}
                                     placeholder="blurred"/>

                    </div>
                    <div className={'faq__bottom__wrapper__right'}>
                        <Accordion panels={questions}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
