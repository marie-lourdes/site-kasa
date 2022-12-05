
// import PropTypes
import PropTypes from "prop-types"

// import des icons Font-Awesome ArrowLeft et ArrowRight
import { ArrowLeft, ArrowRight } from "../../Atoms/IconsFontAwesome"

//styled component avec nuka-carousel integré
import StyledCarousel from "./StyledCarousel.js"


function CarouselLocation({ children, url }) {


    return (
        /*affichage de la caroussel avec la definition des props de nuka-carousel pour repondre aux contraintes fonctionnelles du client*/
        <StyledCarousel
            /* avec prop wrapAround on slide  à l infini sans se limiter a la premiere image et à la derniere image*/
            wrapAround={true}

            /*les propControls render de nuka carousel controle l affichage des elements 
            avec les valeurs des props currentSlide, slideCount, previousSlide, nextSlide recupérées en parametre de la fonction des propControl*/

            renderBottomCenterControls={({ currentSlide, slideCount }) => (
                /* le bullet s saffiche que si il y a plus d 'une image dans la carroussel, idem pour les boutons suivant et precedent*/
                slideCount > 1 &&
                <div>{currentSlide + 1}/{slideCount}</div>
            )}

            renderCenterLeftControls={({ previousSlide, slideCount }) => (
                slideCount > 1 &&
                <button onClick={previousSlide} title="Image Précédente" >
                    <ArrowLeft />
                </button>
            )}

            renderCenterRightControls={({ nextSlide, slideCount }) => (
                slideCount > 1 &&
                <button onClick={nextSlide} title="Image suivante"  >
                    <ArrowRight />
                </button>
            )}
        >
            {/*children props img}*/}
            {children}

        </StyledCarousel>

    )
}
// verification du tableau d images de type string  "generé par nuka-carousel"" de la carousel et le caractere obligatoire
CarouselLocation.propTypes = {
    url: PropTypes.arrayOf(PropTypes.string.isRequired),

}

export default CarouselLocation