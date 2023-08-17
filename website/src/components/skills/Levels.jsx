import React from "react"
import './skills.css';

export const FrontEnd = () => {
    return(
<div className="skill">
    <p>Front-end development</p>
    
    <li>
        <h3>HTML</h3>
        <span className="bar"><span className="html"></span></span>
    </li>
    <li>
        <h3>CSS</h3>
        <span className="bar"><span className="css"></span></span>
    </li>
    <li>
        <h3>JavaScript</h3>
        <span className="bar"><span className="javascript"></span></span>
    </li>
    <li>
        <h3>React</h3>
        <span className="bar"><span className="react"></span></span>
    </li>
    <li>
        <h3>Git</h3>
        <span className="bar"><span className="git"></span></span>
    </li>
</div>
    )
}

export const BackEnd = () => {
    return(
        <div className="skill">  
        <p>Back-end development</p>    
            <li>
                <h3>Python</h3>
                <span className="bar"><span className="python"></span></span>
            </li>
            <li>
                <h3>Django</h3>
                <span className="bar"><span className="django"></span></span>
            </li>
            <li>
                <h3>MySQL</h3>
                <span className="bar"><span className="mysql"></span></span>
            </li>
            <li>
                <h3>JAVA</h3>
                <span className="bar"><span className="java"></span></span>
            </li>
            <li>
                <h3>AWS Cloud</h3>
                <span className="bar"><span className="aws"></span></span>
            </li>
            {/* <li>
                <h3>RHCSA</h3>
                <span className="bar"><span className="redhat"></span></span>
            </li> */}
        </div>
            )
        }

export const SoftSkills = () => {
    return(
        <div className="skill">
            <p>Soft skills</p>
            
            <li>
                <h3>Communication</h3>
                <span className="bar"><span className="comm"></span></span>
            </li>
            <li>
                <h3>Creativity</h3>
                <span className="bar"><span className="crv"></span></span>
            </li>
            <li>
                <h3>Leadership</h3>
                <span className="bar"><span className="lds"></span></span>
            </li>
            <li>
                <h3>Logical Thinking</h3>
                <span className="bar"><span className="lgt"></span></span>
            </li>
            <li>
                <h3>Problem Solving</h3>
                <span className="bar"><span className="prs"></span></span>
            </li>
        </div>
            )

}
        
