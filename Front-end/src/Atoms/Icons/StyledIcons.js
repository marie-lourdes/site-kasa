import styled from 'styled-components'
import rateStar from '../../assets/rateStar.png'
import starEmpty from '../../assets/star.png'
import rateStar_S from '../../assets/rateStar-s.png'
import starEmpty_S from '../../assets/star-s.png'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledIconsArrowUp = styled.div`
& > img {
    @media screen and ${devices_mediaQueries.mobile} {
      height: 10px;
    }
  }
 
`
const StyledIconsArrowCarousel = styled.div`
  position: relative;
  ${({ $arrowLeft }) => $arrowLeft && `left: 30%;`}
  ${({ $arrowRight }) => $arrowRight && `right: 30%;`}
  & > img {
  height: 80px;
    @media screen and ${devices_mediaQueries.mobile} {
      height: 20px;
    }
  }
 
`
const StyledRateStar = styled.div`
 ${({ rating, value }) =>
    value <= rating ? `background: url('${rateStar}')` : ` background: url('${starEmpty}')`};
    height: 30px;
    width:30px;
    margin-left: 1%;
    @media screen and ${devices_mediaQueries.mobile} {
      ${({ rating, value }) =>
    value <= rating ? `background: url('${rateStar_S}')` : ` background: url('${starEmpty_S}')`};
      height: 15px;
      width: 15px;
    }
`
export {
  StyledIconsArrowCarousel,
  StyledIconsArrowUp,
  StyledRateStar,
}
