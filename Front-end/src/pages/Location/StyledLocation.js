import styled from "styled-components";
const StyledMainLocation = styled.main`

flex-direction:row;
align-items; center;

.column-left-info-location, .column-right-info-owner {
    display: flex;  
}
.column-left-info-location {
    flex-direction: column;
    flex: 2;
    box-sizing: border-box;
}
.column-right-info-owner {
   
    flex: 1;
  
    flex-direction: column;
   

}
.info-owner {
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
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
.rating {
    display: flex;
    justify-content: flex-end;
}
`
export default StyledMainLocation
