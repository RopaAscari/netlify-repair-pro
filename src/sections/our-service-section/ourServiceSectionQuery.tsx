import { graphql } from "gatsby";

export const ourServiceSectionQuery = graphql`
    query {
        carpentryImage: file(relativePath: {eq: "carpentry_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        landscapeImage: file(relativePath: {eq: "landscape_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        paintingImage: file(relativePath: {eq: "painting_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        plumbingImage: file(relativePath: {eq: "plumbing_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        weldingImage: file(relativePath: {eq: "welding_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        gardenImage: file(relativePath: {eq: "garden_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        electricalImage: file(relativePath: {eq: "electrical_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        closetImage: file(relativePath: {eq: "closet_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
        applianceImage: file(relativePath: {eq: "appliance_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        }
    }
`
