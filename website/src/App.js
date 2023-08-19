import './App.css';
import About from './components/about/About';
import Work from './components/certificates/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';

function App() {

  return (
    <>  
    
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Qualification/>
      <Skills/>
      <Work/>
      <Contact/> 
    </main>
    <Footer/>
    </>
  );
}


export default App;
