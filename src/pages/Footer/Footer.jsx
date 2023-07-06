import Footlogo from './1.png';
import { FaHeart } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return(
    <div className="main-footer">
      <div className="footer-logo">
        <img src={Footlogo} alt="logo" id="footer-logo-image" />
      </div>
      <div className="info-footer">
        <span id="footer-middle-info">
          Made with <FaHeart id="heart"/> by <span id="except-info">ReactJS</span> 2023. SUREN LAMA
        </span>
      </div>
      <div className="socio-footer-icons">
        <ul className="socio-footer">
        <a href="#"> <li><FaGithub/></li></a>
          <a href="#"> <li><FaLinkedinIn/></li></a>
        </ul>
      </div>

    </div>
  )
}
export default Footer;