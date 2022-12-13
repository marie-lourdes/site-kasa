import styled from 'styled-components'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledHeaderInfoLocation = styled.div`
    display:flex;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
    @media screen and ${devices_mediaQueries.mobile} {
        flex-wrap: wrap;
        justify-content: start;
        width: 100%;
    } 
    @media screen and ${devices_mediaQueries.tablet} {
        flex-wrap: wrap; 
    } 
    
    .column-left-info-location, .column-right-info-owner {
        display: flex;  
    }

    .column-left-info-location {
        flex-direction: column;
        min-width: 50%;
        justify-content: space-around;
        box-sizing: border-box;
        @media screen and ${devices_mediaQueries.mobile} {
           min-width: 100%;                
        } 
        @media screen and ${devices_mediaQueries.tablet} {
           min-width: 100%
        }
        .title-location {
        font-size: 2.25em;
        margin-bottom: 1%;
        font-weight: bold;
            @media screen and ${devices_mediaQueries.mobile} {
                font-size: 1.125em;
                margin-bottom: 3%;                
            } 
            @media screen and ${devices_mediaQueries.tablet} {
                font-size: 2em;
                margin-bottom: 3%;
            }
            & + div {
                margin-bottom: 4%;
                font-weight: bold;
                @media screen and ${devices_mediaQueries.mobile} {
                    font-size: 0.875em;
                } 
                @media screen and ${devices_mediaQueries.tablet} {
                    font-size: 1.5em;
                 
                }
            }                
        }
    }

    .column-right-info-owner {
        width:50%;
        flex-direction: column; 
        margin-top: -1%;
        @media screen and ${devices_mediaQueries.mobile} {
         flex-flow: wrap-reverse row-reverse;
         justify-content: space-between;
         width: 100%;
         align-items: center;
         height: 70px;    
        } 
        @media screen and ${devices_mediaQueries.tablet} {
            flex-flow: wrap-reverse row-reverse;
            justify-content: space-between;
            width: 100%;
            height: 100px;
            align-items: center;
        }  
    }

    .info-owner {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        @media screen and ${devices_mediaQueries.mobile} {
            width: 50%;
        } 
        @media screen and ${devices_mediaQueries.tablet} {
            width: 50%;
        } 

        .name-owner {
            line-height: 1.5em;
            font-size: 1.125em;
            @media screen and ${devices_mediaQueries.mobile} {
                font-size: 0.75em;
            } 
        }

        .photo-owner {
            height: 64px;
            width: 64px;
            border-radius: 50%;
            overflow: hidden;
            margin-left: 1%;
            background: #C4C4C4;
            @media screen and ${devices_mediaQueries.mobile} {
                height: 32px;
                width: 32px;
                margin-left: 5%;
            } 
            
            img {
            width:100%;
            }
        }
    }

    .rating {
        display: flex;
        justify-content: flex-end;
        margin-top: 5%;
        align-items: center;
        @media screen and ${devices_mediaQueries.mobile} {
            margin-top: 0;   
        } 
        @media screen and ${devices_mediaQueries.tablet} {
        margin-top: 0;   
        } 
    }

    & + .collapse-location-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        @media screen and ${devices_mediaQueries.mobile} {
            flex-wrap: wrap;
        }
        @media screen and ${devices_mediaQueries.tablet} {
            margin-top: 0;   
        } 
    }
`

export default StyledHeaderInfoLocation
