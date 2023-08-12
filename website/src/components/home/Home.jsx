import React from 'react';
import './home.css';
import Data from './Data';
import Type from './Type';
import Social from './Social';
import Img from "../../assets/mohit.jpg";

function Home() {
return(
    <section className="home section" id="home">
        <div className="home__container container gap">
            <div className="home__content">
            <Data/>
                <Type/>

            </div>
                
                <div className="home__img">
                    <img src={Img} width={100} height={100}/>
                

                </div>
                
                <Social/> 

                
            
            {/* <ScrollDown/> */}
        </div>
    </section>
)
}

export default Home;
