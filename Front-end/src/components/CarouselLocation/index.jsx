// import PropTypes
import PropTypes from "prop-types"
import { useState, useContext } from "react"

import { DataOneLocationContext } from "../../utils/contexte-fetch/DataOneLocationContext"

// import des icons Font-Awesome ArrowLeft et ArrowRight
import { ArrowLeft, ArrowRight } from "../../Atoms/IconsFontAwesome"

//styled component avec nuka-carousel integré
import { StyledCarousel, StyledSlideCount, StyledArrowButton } from "./StyledCarousel.js"

function CarouselLocation({ children, currentSlide, setCurrentSlide }) {
    const { dataPictures } = useContext(DataOneLocationContext)
    console.log("index", currentSlide)
    const currentSlideIndex = parseInt(currentSlide)
    const nxtSlide = currentSlideIndex + 1;
    const prevSlide = currentSlideIndex - 1;
    const lastSlide = dataPictures && dataPictures.length - 1;
    const slideCount = dataPictures && dataPictures.length;
    console.log("slideCount", slideCount)


    /*  const slideCount = url.length*/
    function previousSlide() {

        if (currentSlide === 0) {
            console.log("prevslide", currentSlide)
            return setCurrentSlide(lastSlide)


        } else {
            return setCurrentSlide(prevSlide)
        }

    }
    function nextSlide() {
        if (currentSlide === dataPictures.length - 1) {
            console.log("next slide", currentSlide)
            return setCurrentSlide(0)
        } else {
            return setCurrentSlide(nxtSlide)
        }
    }

    return (
        /*affichage de la caroussel avec la definition des props de nuka-carousel pour repondre aux contraintes fonctionnelles du client*/
        <StyledCarousel>

            <StyledArrowButton arrow="left" title="Image Précédente" onClick={previousSlide} >
                {slideCount > 1 &&
                    <ArrowLeft />}
            </StyledArrowButton>
            <StyledArrowButton arrow="right" title="Image suivante" onClick={nextSlide}
            > {slideCount > 1 &&
                <ArrowRight />}
            </StyledArrowButton>
            <StyledSlideCount>{currentSlide + 1}/{slideCount}</StyledSlideCount>

            {/*children props img}*/}
            {children}

        </StyledCarousel >

    )
}
// verification du tableau d url de type string  "de la base de données recupérés  dans la carousel et le caractere obligatoire
// pour verifier et respecter la structure de la base de données lorsqu une nouvelle donnée d image est inseré, doit etre sous forme de tableau string comme les données images des autres location
CarouselLocation.propTypes = {
    url: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default CarouselLocation