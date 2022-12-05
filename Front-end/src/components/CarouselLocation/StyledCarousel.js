import styled from "styled-components";
//import du composant carousel de nuka-carousel
import Carousel from "nuka-carousel"

const StyledCarousel = styled(Carousel)`
  /*slide-frame*/
    margin-top: 1.8%;
    border-radius: 25px;
    max-height: 415px;
    mix-blend-mode: normal;
    overflow:hidden;
    /*slide-list*/
   .slide img {
    /* definition de la hauteur pour redefinir sa position dans le frame*/
        max-height: 415px;
        min-height: 415px;
        object-fit: cover;
        object-position: center 50%;
        width:100%;       
    }
  
`

export default StyledCarousel