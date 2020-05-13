import React from 'react';
import '../style/Welcome.css';

function Welcome() {

    return (
        <section>
            <div className="row">
                <div className="col-sm-12">
                    <h1 id="welcome">WELCOME</h1>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <h2 id="intro">INTRO</h2>
                    <p id="bio">My name is Jake and I'm a full-stack web developer. I enjoy
                        the the creative aspect of coding and creating beautiful user interfaces. My UX designs vary and can
                        be minimalistic, retro-modern, modern or colorful. With mainly high-line automotive industry and
                        customer service backgrounds, I am looking to move my career focus towards web and app development.
                        I've attended a 24-week, intensive full-stack web development bootcamp, as well as an online iOS app
                    development course. Please select the <i>EXPLORE</i> tab above to learn more about me and my work.
                </p>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <h2 id="aboutMe">ABOUT ME</h2>
                    <p id="bio">I am 25 years old and currently live in the Denver Metro area. I was born in sunny Southern California.
                    In my spare time, I enjoy working on personal coding projects and going on long-distance runs. I also enjoy visiting the Disney
                    theme parks on both ends of the country when I can. Web development is an exciting way for me to express my creativity.
                </p>
                
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <h2 id="career">CAREER</h2>
                    <p id="bio">Since having my first job back in 2013, I have held many different positions that have given
                        me skills to use in any field. I have been everything from a barista at Starbucks,
                        to a shift manager, to a service advisor at
                        Mercedes-Benz. I am now ready to pursue a career in full-stack web and app development.
                        During my coding bootcamp, I learned many invaluable web development skills.
                        I am proficient in:
                        <ul>
                            <b><li>React</li>
                            <li>HTML5 / CSS3</li>
                            <li>Bootstrap / UI Kit / Materialize</li>
                            <li>Javascript / Node.JS</li>
                            <li>Express</li>
                            <li>MySQL / MongoDB</li>
                            <li>Handlebars</li></b>
                        </ul>
                </p>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <h2 id="career">CONTACT</h2>
                    <p id="bio">
                        <br />
                        P. 951-227-6991
                    <br />
                        <br />
                        E. JCB.PETERSEN1995@GMAIL.COM
                </p>
                </div>
            </div>
            <div className="row">
                <br />
            </div>

            
        </section>



    )
};

export default Welcome;