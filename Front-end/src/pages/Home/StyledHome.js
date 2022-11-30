import styled from "styled-components"
import bannerHome from "../../assets/banner-home.png"

const StyledHome = styled.section`
width: 100%;
border-radius: 25px;
height: 223px;
box-sizing: border-box;
position: relative;
overflow: hidden;
margin-top: 5%;
display: flex;
justify-content: center;
box-sizing: border-box;
background: url(${bannerHome}) no-repeat  ;
.title-home{
    position: absolute;
    color: white;
    z-index: 9999;
    top: 32%;
    left: 22.3%;
   
   
   
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    height:68px; 
  
   
    h1{
        
          
      
    }
  
}
`

export default StyledHome