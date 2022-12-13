// import PropTypes
import PropTypes from 'prop-types'

// import des icons Font-Awesome ArrowLeft et ArrowRight
import { ArrowLeft, ArrowRight } from '../../Atoms/Icons'

//styled component avec nuka-carousel integré
import { StyledCarousel, StyledSlideCount } from './StyledCarousel.js'

function CarouselLocation({ children }) {
  return (
    /*affichage de la caroussel avec la definition des props de nuka-carousel pour repondre aux contraintes fonctionnelles du client*/
    <StyledCarousel
      /* avec prop wrapAround on slide  à l infini sans se limiter a la premiere image et à la derniere image*/
      wrapAround={true}
      /*les propControls render de nuka carousel controle l affichage des elements 
            avec les valeurs des props currentSlide, slideCount, previousSlide, nextSlide recupérées en parametre de la fonction des propControl*/

      renderBottomCenterControls={({ currentSlide, slideCount }) =>
        /* le bullet s affiche que si il y a plus d 'une image dans la carroussel, idem pour les boutons suivant et precedent*/
        /* incrementation de 1 pour afficher l index du slide correspondant au numero de l image*/
        /*le composant StyledSlideCount ne s affiche pas sur mobile et tablet*/
        slideCount > 1 && (
          <StyledSlideCount>
            {currentSlide + 1}/{slideCount}
          </StyledSlideCount>
        )
      }
      renderCenterLeftControls={({ previousSlide, slideCount }) =>
        slideCount > 1 && (
          <button onClick={previousSlide} title="Image Précédente">
            <ArrowLeft />
          </button>
        )
      }
      renderCenterRightControls={({ nextSlide, slideCount }) =>
        slideCount > 1 && (
          <button onClick={nextSlide} title="Image suivante">
            <ArrowRight />
          </button>
        )
      }
    >
      {/*children props img}*/}
      {children}
    </StyledCarousel>
  )
}
// verification du tableau d url de type string  "de la base de données recupérés  dans la carousel et le caractere obligatoire
// pour verifier et respecter la structure de la base de données lorsqu une nouvelle donnée d image est inseré, doit etre sous forme de tableau string comme les données images des autres location
CarouselLocation.propTypes = {
  url: PropTypes.arrayOf(PropTypes.string),
}

export default CarouselLocation
