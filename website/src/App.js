import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';

import Contact from './components/contact/Contact';


function App() {

  return (
    <>  
    
    <Header/>
    <main className='main'>
   
      <Home/>
      <About/>
      <Contact/> 
  
     
    </main>
    
   
    </>
  );
}


export default App;
