import { graphql } from "gatsby";

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
                fluid(maxWidth: 500){
                    
                }
            }
        }
        paintingImage: file(relativePath: {eq: "painting_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
        plumbingImage: file(relativePath: {eq: "plumbing_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
        weldingImage: file(relativePath: {eq: "welding_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
        gardenImage: file(relativePath: {eq: "garden_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
        electricalImage: file(relativePath: {eq: "electrical_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
        closetImage: file(relativePath: {eq: "closet_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
        applianceImage: file(relativePath: {eq: "appliance_image.png"} ){
            childImageSharp {
                fluid(maxWidth: 500){
                    
                }
            }
        }
    }
`