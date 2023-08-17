import './skills.css';
import { useState } from 'react';
const ClickEvent = () => {
    const[click, setClick]=useState("Front-End Skills")

    return(
        <div className="skills__container">
            <div className="skills__var" value={click} onClick={(event) => setClick(event.target.value)}>
                Front-End Skills
                <i class="uil uil-palette" ></i>
            </div>
            <div className="skills__var">
            Back-End Skills
            <i class="uil uil-brackets-curly" ></i>
            </div>
            <div className="skills__var">
            Soft Skills
            <i class="uil uil-brain"></i>
                
            </div>
        </div>
    )
}

export default ClickEvent;