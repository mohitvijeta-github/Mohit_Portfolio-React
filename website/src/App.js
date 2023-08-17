import './App.css';
import About from './components/about/About';
// import Certificates from './components/certificates/Certificates';
import Work from './components/certificates/Work';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';

// import Contact from './components/contact/Contact';


function App() {

  return (
    <>  
    
    <Header/>
    <main className='main'>
   
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Work/>
      {/* <Certificates/> */}
      {/* <Contact/>  */}
  
     
    </main>
    
   
    </>
  );
}


export default App;
