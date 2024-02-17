import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="mainDiv">
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h1>LOGO</h1>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="in">
              dark
            </div>
          </nav>
        </div>
      </header>

      <div id="sectionWarper">
        <div className="container">
          <div className="mainWarper">

            <div id="sectonOne">

              <div className="one">

                <div className="oneOne">
                  <div className="bioGraphy">
                      <img src="pic.jpg" alt="myphotos" />
                    <div className="imageContainer">
                    </div>
                    <div className="nameTxt">
                      <span>I'm Pronob Biswas</span>
                    </div>
                    <div className="bioTxt">
                      <p>Biography</p>
                      <p className="bioIcon">icon</p>
                    </div>
                  </div>
                  <div className="blog">
                    <div className="blogTxt">
                      <h2>Articale</h2>
                      <h2>&</h2>
                      <h2>publiction</h2>
                    </div>
                    <div className="bioTxt">
                      <p>Biography</p>
                      <p className="bioIcon">icon</p>
                    </div>
                  </div>
                </div>

                <div className="oneTwo">
                  <div className="others">
                    <div className="TFwarpper">
                      <div className="TFCard title">
                        <h3>Title</h3>
                        <h3>Product</h3>
                        <h3>Designer</h3>
                      </div>
                      <div className="TFCard profiles">
                        <div className="rectBox">
                          <div className="prof"></div>
                          <div className="prof"></div>
                        </div>
                        <div className="bioTxt">
                          <p>Biography</p>
                          <p className="bioIcon">icon</p>
                        </div>
                      </div>
                    </div>
                    <div className="service">

                      <h2>Service Offring</h2>

                      <div className="serviceBoxWarpper">

                        <div className="serviceBox">
                          <div className="servicelogo"></div>
                          <h4>static webpage</h4>
                        </div>
                        <div className="serviceBox">
                          <div className="servicelogo"></div>
                          <h4>dynamic webpages</h4>
                        </div>

                        <div className="serviceBox">
                          <div className="servicelogo"></div>
                          <h4>seo</h4>
                        </div>

                        <div className="serviceBox">
                          <div className="servicelogo"></div>
                          <h4>business site</h4>
                        </div>

                      </div>

                      <h1>Iam Good At</h1>

                      <div className="bioTxt">
                          <p>Biography</p>
                          <p className="bioIcon">icon</p>
                        </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="two">

                <div className="twoOne">
                  <h2>Skill and Tols</h2>

                  {/* <marquee behavior="" direction=""> */}

                  <div className="tecName">
                    <div className="techNameBox">HTML5</div>
                    <div className="techNameBox">CSS3</div>
                    <div className="techNameBox">BootStrap</div>
                    <div className="techNameBox">Tilwind</div>
                    <div className="techNameBox">CSS Framwork</div>
                    <div className="techNameBox">CSS Laibrary</div>
                    <div className="techNameBox">JavaScript</div>
                    <div className="techNameBox">ReactJS</div>
                    <div className="techNameBox">MongoDB</div>
                    <div className="techNameBox">NextJS</div>
                    <div className="techNameBox">NodeJS</div>
                  </div>
                  {/* </marquee> */}
                  
                  <div className="techIcon"></div>
                </div>

                <div className="twoTwo">
                  <h2>Work With</h2>
                  <h2 className='gh'>Gole Layal...!</h2>

                  <div className="gTouch">
                    <p>Get In Touch</p>
                    <p>icon</p>
                  </div>
                </div>

              </div>
              

              

            </div>

            <div id="sectonTwo">
              <div className="first"></div>

              <div className="second">

                <div className="exp">
                  <h2>06</h2>
                  <p>YEARS EXPERIENCE</p>
                </div>
                <div className="pro">
                  <h2>+145</h2>
                  <p>TOTAL PROJECTS</p>
                </div>
                <div className="clint">
                  <h2>+129</h2>
                  <p>CLENTS WORLDWIBE</p>
                </div>

              </div>

              <div className="third">
                <h3>See My</h3>
                <h3>Latest Works</h3>
                <div className="allProject">
                  <div className="gTouch">
                    <p>Get In Touch</p>
                    <p>icon</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>

    </>
  )
}

export default App
