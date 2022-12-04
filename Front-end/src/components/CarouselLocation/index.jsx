

// import des icons Font-Awesome ArrowLeft et ArrowRight
import { ArrowLeft, ArrowRight } from "../../Atoms/IconsFontAwesome"

//style component
import StyledCarousel from "./StyledCarousel.js"


function CarouselLocation({ children }) {
    return (

        <StyledCarousel
            wrapAround={true}
            renderBottomCenterControls={({ currentSlide, }) => (
                <div>{currentSlide + 1}/5</div>
            )}
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide} title="Image Précédente" >
                    <ArrowLeft />
                </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide} title="Image suivante"  >
                    <ArrowRight />
                </button>
            )}
        >
            {children}

        </StyledCarousel>

    )
}

export default CarouselLocation