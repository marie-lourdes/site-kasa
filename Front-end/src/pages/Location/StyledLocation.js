import styled from "styled-components";
import devices_mediaQueries from "../../utils/responsive-design/devices.js"
const StyledHeaderInfoLocation = styled.div`
    display:flex;
    justify-content: center;
    align-items: start;
    @media screen and ${devices_mediaQueries.mobile} {
        flex-wrap: wrap;
    } 
    .column-left-info-location, .column-right-info-owner {
        display: flex;  
    }

    .column-left-info-location {
        flex-direction: column;
        flex: 1;
        justify-content: space-around;
        box-sizing: border-box;
        .title-location {
            font-size: 2.25em;
            margin-bottom: 1%;
            font-weight: bold;
            & + div {
                margin-bottom: 4%;
                font-weight: bold;
                @media screen and ${devices_mediaQueries.mobile} {
                    font-size: 0.875em;
                } 
            }  
            @media screen and ${devices_mediaQueries.mobile} {
             font-size: 1.125em;
            }     
        }
    }

    .column-right-info-owner {
        flex: 1; 
        flex-direction: column; 
        @media screen and ${devices_mediaQueries.mobile} {
         flex-flow: wrap-reverse row-reverse;
         justify-content: space-between;
         width: 100%;
        }   
    }

    .info-owner {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .name-owner {
            line-height: 1.5em;
        
        }
        .photo-owner {
            height: 64px;
            width: 64px;
            border-radius: 50%;
            overflow: hidden;
            margin-left: 1%;
            img {
            width:100%;
            }
        }
    }

    .rating {
        display: flex;
        justify-content: flex-end;
        margin-top: 5%;
    }

    & + .collapse-location-row {
    display: flex;
    width: 100%;
    justify-content: space-between;

    }
`

export default StyledHeaderInfoLocation
