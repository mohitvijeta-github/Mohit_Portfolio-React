import './skills.css';
import { BackEnd, FrontEnd, SoftSkills } from './Levels';

const Skills = () => {

  return(
    <section className='skills' id='skills'>
         <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My skills level</span>
    <div className="skills__progress container grid">
      <FrontEnd/>
      <BackEnd/>
      <SoftSkills/>
    </div>
    </section>
  )

}

export default Skills;