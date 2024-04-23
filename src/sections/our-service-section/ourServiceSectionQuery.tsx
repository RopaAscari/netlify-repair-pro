import { graphql } from "gatsby";

export const ourServiceSectionQuery = graphql`
    query {
        carpentryImage: file(relativePath: {eq: "carpentry_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        landscapeImage: file(relativePath: {eq: "landscape_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        paintingImage: file(relativePath: {eq: "painting_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        plumbingImage: file(relativePath: {eq: "plumbing_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        weldingImage: file(relativePath: {eq: "welding_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        gardenImage: file(relativePath: {eq: "garden_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        electricalImage: file(relativePath: {eq: "electrical_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        closetImage: file(relativePath: {eq: "closet_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
        applianceImage: file(relativePath: {eq: "appliance_image.png"}){
            childImageSharp {
                gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO,]
                )
            }
        }
    }
`
