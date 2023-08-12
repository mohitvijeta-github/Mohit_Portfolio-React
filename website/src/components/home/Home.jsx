import React from 'react';
import './home.css';
import Data from './Data';
import Type from './Type';
// import Social from '.Social';

function Home() {
return(
    <section className="home section" id="home">
        <div className="home__container container gap">
            <div className="home__content grid">
                {/* <Social/> */}
                <div className="home_img"></div>
                <Data/>
                <Type/>

                
            </div>
            {/* <ScrollDown/> */}
        </div>
    </section>
)
}

export default Home;
