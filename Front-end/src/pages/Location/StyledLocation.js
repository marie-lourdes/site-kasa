import styled from "styled-components";
const StyledHeaderInfoLocation = styled.div`
display:flex;
justify-content: center;
align-items: start;
.column-left-info-location, .column-right-info-owner {
    display: flex;  
}

.column-left-info-location {
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    box-sizing: border-box;
    .title-location {
        font-size: 36px;
        margin-bottom: 1%;
        & + div {
            margin-bottom: 4%;
        }       
    }
}

.column-right-info-owner {
    flex: 1; 
    flex-direction: column;   
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
}
& + .collapse-location-row {
 display: flex;
width: 100%;
justify-content: space-between;

}
`

export default StyledHeaderInfoLocation
