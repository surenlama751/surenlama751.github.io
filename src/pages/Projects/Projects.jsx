import Firstproject from './s1.png';
import Secondproject from './s2.png';
import Thirdproject from './s3.png';
import Fourthproject from './s4.png';
import './Projects.css';
import {Link} from 'react-router-dom';
const Projects = () => {
  return (
    <div className="main-project-page" id="projects">
      <span id="projects-title">MY PROJECTS</span>
    
    <div className="main-projects">
      <div className="first-project-container">
      <div className="first-project">
       <Link> <img src={Fourthproject} id="project-image1"/></Link>
      </div>
      <div className="second-service-column">
      <div className="second-project">
       <Link> <img src={Secondproject} id="project-image2"/></Link>
      </div>
      <div className="third-project">
      <Link>  <img src={Thirdproject} id="project-image3"/></Link>
      </div>
      </div>
      </div>
      
      <div className="fourth-project">
      <Link> <img src={Firstproject} id="project-image4"/></Link>
      </div>

    </div>
    </div>
  )
}
export default Projects;