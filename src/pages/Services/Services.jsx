import {FaHtml5, FaCss3Alt,FaJsSquare,FaReact,FaKorvue} from "react-icons/fa";
import './Services.css';
const Service = () => {
  return (
    <div className="service-main">
      <span id="service-title">MY SKILLS</span>
      <div className="service-skills">
        <div className="service-icons">
          <div className="icons-border">
          <FaHtml5 id="service-icon1"/>
          </div>
          <button id="service-buttons">HTML5</button>
          </div>
        <div className="service-icons">
          <div className="icons-border">
          <FaCss3Alt id="service-icon2"/>
          </div>
          <button id="service-buttons">CSS</button>
          </div>
        <div className="service-icons">
          <div className="icons-border">
          <FaJsSquare id="service-icon3"/>
          </div>
          <button id="service-buttons">JAVASCRIPT</button>
          </div>
        <div className="service-icons">
          <div className="icons-border">
          <FaReact id="service-icon4"/>
          </div>
          <button id="service-buttons">REACTJS</button>
          </div>
        <div className="service-icons">
          <div className="icons-border">
          <FaKorvue id="service-icon5"/>
          </div>
          <button id="service-buttons">KOTLIN</button>
          </div>

        
      </div>
      <button id="seemore-button-service">SEE MORE</button>
    </div>
  )
}
export default Service;