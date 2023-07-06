import './Home.css';
import Main from './main1.jpg';
const Home = () => {
  return(
    <div className="home-main-page">
      <div className="main-homeimage">
        <img src={Main} id="home-image" alt="planet"/>
      </div>
      <div className="home-page">
        <span id="heading-first">I'm Suren Lama<br/>
       <span id="diff-color"> Front </span> End Developer</span><br/>
        <span id="info">Experienced web developer skilled in creating dynamic and <br/>user-friendly websites. Proficient in HTML, CSS, JavaScript, <br/>and responsive design. Committed to delivering high-quality <br/>solutions that meet clients' needs and exceed their expectations.</span><br/>
        <button id="home-btn">LEARN MORE</button>
      </div>
      <div className="socio">
        
      </div>
    </div>
  )
}
export default Home;