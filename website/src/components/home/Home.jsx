import React from 'react';
import './home.css';
import Data from './Data';
import Type from './Type';
import Social from './Social';
import Img from "../../assets/img.png";

function Home() {
return(
    <section className="home section" id="home">
        <div className="home__container container gap">
            <div className="home__social__left">
            <Social/> 
            </div>

            <div className="left__section">
            
            <Data/>
                <Type/>

            </div>
                
                <div className="right__section">
                    <img src={Img} />
                

                </div>
                
               

                
            
            {/* <ScrollDown/> */}
        </div>
      
    </section>
)
}

export default Home;
