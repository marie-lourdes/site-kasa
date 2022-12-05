import styled from "styled-components";
const StyledMainLocation = styled.main`

flex-direction:row;

.column-left-info-location, .column-right-info-owner {
    display: flex;  
}
.column-left-info-location {
    flex-direction: column;
    flex: 2;
}
.column-right-info-owner {
    justify-content: flex-end;
    flex: 1;
    align-items: center;
   

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
`
export default StyledMainLocation
