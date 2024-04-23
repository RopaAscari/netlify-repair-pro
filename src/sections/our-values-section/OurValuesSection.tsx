import React, {useEffect} from 'react';
import './ourValuesSection.scss'
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";

export const OurValuesSection = () => {
    const {
        labourGuaranteedImage,
        professionalServiceImage,
        qualityWorkmanshipImage
    } = useStaticQuery(ourValuesSectionQuery)

    const values: Array<{ name: string, icon: any, description: string }> = [
        {
            name: "Quality Workmanship",
            icon: getImage(qualityWorkmanshipImage) as IGatsbyImageData,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna purus massa gravida amet, duis purus. Purus nisi, et id blandit risus at vulputate lacinia."
        },
        {
            name: "Labour Guaranteed",
            icon: getImage(labourGuaranteedImage) as IGatsbyImageData,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna purus massa gravida amet, duis purus. Purus nisi, et id blandit risus at vulputate lacinia."
        },
        {
            name: "Professional Service",
            icon: getImage(professionalServiceImage) as IGatsbyImageData,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna purus massa gravida amet, duis purus. Purus nisi, et id blandit risus at vulputate lacinia."
        }
    ]

    return (
        <div id={'our-values'} className={'our-values'}>
            <span id={'section-heading'}>Our Values</span>
            <div className={"our-values__top"}>
                <div className={"our-values__top__left"}>
                    <h1>Repair solutions for All Household Problems</h1>
                </div>
                <div className={"our-values__top__right"}>
                    <p>We specialize in home repair and are able to perform these jobs with proficiency and excellent
                        results.</p>
                </div>
            </div>
            <div className={"our-values__bottom"}>
                {values.map(({icon, description, name}, index) => (
                    <div className={"our-values__bottom__item"} key={name + index}>

                        <GatsbyImage image={getImage(icon) as IGatsbyImageData} alt={"alt"}/>
                        <span>{name}</span>
                        <p>{description}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};


export const ourValuesSectionQuery = graphql`
    query{
        labourGuaranteedImage: file(relativePath: {eq: "icons/labour_guaranteed_icon.png"} ){
            #        LabourGuaranteedImage: file(relativePath: {eq: "plumbing_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        professionalServiceImage: file(relativePath: {eq: "icons/professional_service_icon.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        qualityWorkmanshipImage: file(relativePath: {eq: "icons/quality_workmanship_icon.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
    }
`