import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import './ourServiceSection.scss'
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image"

export const OurServiceSection = () => {
        const {
            carpentryImage,
            closetImage,
            applianceImage,
            landscapeImage,
            paintingImage,
            plumbingImage,
            electricalImage,
            weldingImage,
            gardenImage
        } = useStaticQuery(ourServiceSectionQuery)

        const services: Array<{ image: IGatsbyImageData, name: string, displayText: string, alt: string }> = [
            {
                image: getImage(carpentryImage) as IGatsbyImageData,
                name: "carpentry",
                displayText: "Carpentry & Roofing",
                alt: ""
            },
            {
                image: getImage(closetImage) as IGatsbyImageData,
                name: "closet",
                displayText: "Closet Organizer Installation",
                alt: ""
            },
            {
                image: getImage(applianceImage) as IGatsbyImageData,
                name: "appliance",
                displayText: "Appliance Installation",
                alt: ""
            },
            {
                image: getImage(landscapeImage) as IGatsbyImageData,
                name: "landscape",
                displayText: "Gardening & Landscaping",
                alt: ""
            },
            {image: getImage(paintingImage) as IGatsbyImageData, name: "painting", displayText: "Painting", alt: ""},
            {image: getImage(plumbingImage) as IGatsbyImageData, name: "plumbing", displayText: "Plumbing", alt: ""},
            {image: getImage(electricalImage) as IGatsbyImageData, name: "electrical", displayText: "Electrical", alt: ""},
            {
                image: getImage(weldingImage) as IGatsbyImageData,
                name: "welding",
                displayText: "Welding & Metal Fabrication",
                alt: ""
            },
            {image: getImage(gardenImage) as IGatsbyImageData, name: "garden", displayText: "Gardening", alt: ""},
        ]

        return (
            <div className={"our-services"} id={'services'}>
                <span id={'section-heading'}>Our Services</span>
                <div className={"our-services__top"}>
                    <div className={"our-services__top__left"}>
                        <h1>Whatever you’re Looking for, We Got You <span>Covered!</span></h1>
                    </div>
                    <div className={"our-services__top__right"}>
                        <p>We would love the opportunity to earn your trust through open communication, ontime performance,
                            quality service and a price that keeps money in your wallet.</p>
                    </div>
                </div>

                <div className={"our-services__bottom"}>
                    {
                        services.map(({image, name, displayText, alt}, index) => (
                            <div className={['our-services__bottom__service', name].join(" ")} key={name + index}>
                                <GatsbyImage image={image} alt={alt}/>
                                <div className={'our-services__bottom__service__content'}>
                                    <span>{displayText}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
;


export const ourServiceSectionQuery = graphql`
    query{
        carpentryImage: file(relativePath: {eq: "carpentry_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        landscapeImage: file(relativePath: {eq: "landscape_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        paintingImage: file(relativePath: {eq: "painting_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        plumbingImage: file(relativePath: {eq: "plumbing_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        weldingImage: file(relativePath: {eq: "welding_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        gardenImage: file(relativePath: {eq: "garden_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        electricalImage: file(relativePath: {eq: "electrical_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        closetImage: file(relativePath: {eq: "closet_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        applianceImage: file(relativePath: {eq: "appliance_image.png"} ){
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        },
        testImage: file(relativePath: {eq: "appliance_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`