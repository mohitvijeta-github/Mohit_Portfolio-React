import React from "react";

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i class="uil uil-hard-hat about__icon"></i>
              <div className="about__title">Experience</div>
              <div className="about__subtitle">2 years experience</div>
            </div>

            <div className="about__box">
            <i class="uil uil-file-bookmark-alt about__icon"></i>
              <div className="about__title">Certificates</div>
              <div className="about__subtitle">10+ Professional Certificates</div>
            </div>

            <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>
              <div className="about__title">Completed</div>
              <div className="about__subtitle">12+ Achieved Projects</div>
            </div>
        </div>
    )

} 

export default Info;