import './About.css';
import Aboutimage from './About.webp';
import Video from './video.jpg';
import Suren from './suren.png';
const About = () => {
  return(
    <div id="about">
      <span id="title-about-page">ABOUT US</span>
    <div className="about-main-page">
      
      <div className="first-about-column">
        <span id="about-intro">Front End Developer</span><br/>
        <span id="about-sec-intro">Front-End Developer | React.js & Kotlin</span><br/>
        <span id="about-third-intro">Welcome to my portfolio! I'm a front-end <br/>developer proficient in React.js and Kotlin<br/> basics. I create dynamic and responsive user<br/> interfaces with a focus on clean code and <br/>seamless user experiences. Check out my<br/> projects and let's build something amazing <br/>together!</span><br/>
        <button id="about-btn">ABOUT US</button>
      </div>
      <div className="second-about-column">
        <div className="forimage">
      <img src={Aboutimage} id="about-image"/>
      </div>
      <div className="empty">

      </div>

      </div>
     
    </div>
    <div className="video">
      <div className="profile-img">
        <img src={Video} id="video-image"/>
      </div>
      <div className="mid-info">
        <span id="about-name">SUREN LAMA</span>
        <span id="middle-information">Experienced front-end developer skilled in React.js and foundational knowledge of Kotlin. I specialize in crafting dynamic and intuitive user interfaces using React.js, leveraging its component-based architecture and state management. With a keen eye for detail and a passion for clean code, I strive to deliver high-quality and performant web applications. Additionally, </span><br/>
        <button id="more-reading">MORE..</button>
      </div>
      <div className="actual-video">
      <iframe width="200" height="200" src="https://www.youtube.com/embed/WcIcVapfqXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      <div className="about-suren">
        <div className="suren-border">
          <img src={Suren} alt="suren" id="suren-image"/>
        </div>
        <div className="suren-information">
          <span id="about-inspiration">MY INSPIRATION</span>
          <span id="suren-about-fullname">SUREN LAMA</span>
          <span id="suren-about-role">FRONT END DEVELOPER</span>
          <span id="suren-about-info">I am a highly skilled and innovative problem solver, eager to bring my technical expertise and creative mindset to your IT company. With a strong track record of delivering exceptional results and a passion for continuous learning, I thrive in collaborative environments and embrace new technologies. I am motivated, adaptable, and committed to excellence, ready to contribute my skills and enthusiasm to help your company succeed and drive technological advancements forward.</span>
          <button id="about-suren-button">ABOUT SUREN</button>
        </div>
      </div>
    </div>
  )
}
export default About;
// my understanding of Kotlin basics allows me to contribute to the back-end development process and collaborate effectively with full-stack teams. Let's collaborate to create innovative and user-centric web experiences together