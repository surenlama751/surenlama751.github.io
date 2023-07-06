
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Home/>
   <About/>
   <Service/>
   <Projects/>
   <Contact/>
   <Footer/>
    <Routes>
    <Route></Route>
    </Routes></BrowserRouter>
  );
}

export default App;
