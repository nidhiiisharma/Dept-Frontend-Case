import logoWhite from "../../assets/dept_logo_white.svg";
import Facebook from "../../assets/icons/facebook.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagram from "../../assets/icons/instagram.png";
import topButton from "../../assets/icons/top_button.svg"
import './Footer.css'

const Footer = () => {
  const links = ['work', 'services', 'industries', 'stories', 'about', 'careers', 'contact']

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  })
}

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="top-container">
          <img className="logo-footer" src={logoWhite} alt='Dept logo' />
           <div className="links">{links.map((link, index) => 
                <a key={index} className="link" href="#">{link}</a>)}
            </div>
           <div className="icons">
            <a target='_blank' href='https://www.facebook.com/DeptAgency/'>
              <img src={Facebook} alt='Facebook icon' />
            </a>
            <a target='_blank' href='https://twitter.com/deptagency'>
              <img src={Twitter} alt='Twitter icon' />
            </a>
            <a target='_blank' href='https://www.instagram.com/deptagency/'>
              <img src={Instagram} alt='Instagram icon' />
            </a>
          </div>
        </div>
        <div className="bottom-container">
          <p className="footer-text">Chamber of Commerce: 63464101</p>
          <p className="footer-text">VAT: NL 8552.47.502.B01</p>
          <p className="footer-text">Terms and conditions</p>
          <p className="footer-copyright">&#169; 2021 Dept Agency</p>
        </div>
        <div className="footer-btn">
          <button className="footer-top-btn" onClick={() => scrollToTop()}>
            <img src={topButton} alt="up arrow icon" />
            TOP
          </button>
      </div>
      </div>
    </footer>
  )
}
export default Footer;
