import React,{useState} from 'react'
import profile from '../assets/profile-pic.png'
import linkedin from '../assets/linkedin.png' 
import about from '../assets/about.png'
import experience from '../assets/experience.png'
import education from '../assets/education.png'
import github from '../assets/github.png' 
import checkmark from '../assets/checkmark.png' 
import projectOne from '../assets/project-1.png' 
import projectTwo from '../assets/project-2.png' 
import projectThree from '../assets/project-3.png' 
import projectFour from '../assets/project-4.png'
import projectFive from '../assets/project-5.png'
import projectSix from '../assets/project-6.png'
import email from '../assets/email.png'

import './MainPage.css';
import '../'


function MainPage() {
  const [isDarkMode, setDarkMode] = useState(false);
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <nav id="desktop-nav">
      <div class="logo">Prithwiraj Mohan</div>
      <div>
        <ul className={isDarkMode ? 'darklink' : 'nav-links'}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="btn btn-color-1" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo">Prithwiraj Mohan</div>
      <button className="btn btn-color-1" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div class="hamburger-menu">
      
        <div class="hamburger-icon" onClick={toggleMenu}>
       
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </div>
      </div>
    </nav>
    <section id="profile">
      <div class="section__pic-container">
        <img src={profile} alt="Prithwi picture" />
      </div>
      <div class="section__text">
        <p className={isDarkMode ? 'darkP' : 'section__text__p1'}>Hello, I'm</p>
        <h1 class="title">Prithwiraj Mohan</h1>
        <p className={isDarkMode ? 'darkP' : 'section__text__p2'}>Mearn Stack Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src={github}
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <p className='section__text__p1' style={{color:'black'}}>Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={about}
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={experience}
                alt="Experience icon"
                class="icon"
              />
              <h3 style={{color:'black'}}>Experience</h3>
              <p>1+ years <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education icon"
                class="icon"
              />
              <h3 style={{color:'black'}}>Education</h3>
              <p>B.Sc. Computer Science<br />MCA. Masters Degree</p>
            </div>
          </div>
          <div class="text-container">
            <p style={{color:'black'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      /> */}
    </section>
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 style={{color:'black'}}>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      /> */}
    </section>
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectOne}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Travel</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectTwo}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">E-Shopping</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectThree}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Luxuria</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectFour}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Film Fusion Hub</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectFive}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Travel Blogs</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectSix}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Moms Kitchen</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      /> */}
    </section>
    <section id="contact" style={{paddingTop:'300px'}}>
      <p class="section__text__p1" style={{color:'black'}}>Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:prithwiraj1999@gmail.com" style={{color:'black'}}>prithwiraj1999@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com" style={{color:'black'}}>LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p style={{color:'black'}}>Copyright &#169; 2023 Prithwiraj Mohan. All Rights Reserved.</p>
      
    </footer>
    </div>
  )
}

export default MainPage