import logoConstrast from '../../assets/Logo-kasa-contrast.png'
import StyledFooter from './StyledFooter.js'
function Footer() {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <div className="logo-footer">
          <img src={logoConstrast} alt="logo contrasté de  Kasa" />
        </div>
        <span> © 2020 Kasa. All rights reserved</span>
      </div>
    </StyledFooter>
  )
}

export default Footer
