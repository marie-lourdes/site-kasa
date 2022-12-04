import Carousel from "nuka-carousel"
// import des icons Font-Awesome ArrowLeft et ArrowRight
import { ArrowLeft, ArrowRight } from "../../Atoms/IconsFontAwesome"

function CarouselLocation({ children }) {
    return (
        <Carousel
            wrapAround={true}
            renderBottomCenterControls={({ currentSlide }) => (
                <div>1/ {currentSlide + 1}</div>
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

        </Carousel>
    )
}

export default CarouselLocation