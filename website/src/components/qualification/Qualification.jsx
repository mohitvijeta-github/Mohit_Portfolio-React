import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Back-End Developer Professional Certificate</h3>
                <span className="qualification__subtitle">
                  Online Learning - Meta
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front-End Developer Professional Certificate</h3>
                <span className="qualification__subtitle">
                  Online Learning - Meta 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Mar 23 - July 2023
                </div>
              </div>
            </div>



            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Information Technology</h3>
                <span className="qualification__subtitle">
                  Melbourne - Federation University 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> July 2019 - Jan 2023
                </div>
              </div>
                 
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Red Hat System Administrator I and II</h3>
                <span className="qualification__subtitle">
                  Melbourne - IBM(Federation University)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> July 2022 - Mar 2023
                </div>
              </div>



            </div>
            <div className="qualification__data">
              <div></div>

          





            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-end Developer <br/> (Volunter)</h3>
                <span className="qualification__subtitle">
                  Vic Wise - Melbourne
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> July 2022-current
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Student Consultant <br/>(Internship)</h3>
                <span className="qualification__subtitle">
                  Global Victoria  - Melbourne 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Oct 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Ecommerce Developer(Shopify/ Ads) </h3>
                <span className="qualification__subtitle">BellySecure - Melbourne </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2021 - Feb 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
