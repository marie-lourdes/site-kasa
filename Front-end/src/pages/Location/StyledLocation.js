import styled from "styled-components";
const StyledHeaderInfoLocation = styled.div`
display:flex;
justify-content: center;

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
    position: relative;
}

.info-owner {
    display: flex;

    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right:0%;
    top: -15%;
    .name-owner {
        line-height: 1.5em;
    }
    .photo-owner {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 2%;
        img {
          width:100%;
        }
    }
}



.rating {
    display: flex;
    justify-content: flex-end;
    position: absolute;
right: 0%;
bottom: 30%;


}
`
export default StyledHeaderInfoLocation
