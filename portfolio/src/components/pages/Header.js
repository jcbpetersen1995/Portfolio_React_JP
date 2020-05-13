import React from 'react';
import '../style/Header.css';

function Header() {
    return (
        <nav className="navbar navbar-light bg-dark" uk-sticky="bottom: #offset">
            {/* <a class="navbar-brand" href="#"> */}
                <img id="logo" src="./WhiteLogo.png" width="30" height="30" alt="white JP" loading="lazy" />
            {/* </a> */}

            <button className="uk-button uk-button-default uk-margin-small-right" type="button"
            uk-toggle="target: #offcanvas-nav-primary" id="exploreButton">Explore</button>

            <div id="offcanvas-nav-primary" uk-offcanvas="mode: push; overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul  id="sidebarText" className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        <li><a href="/">WELCOME</a></li>
                        <li><a href="/portfolio">PORTFOLIO</a></li>
                        <li><a href="https://github.com/jcbpetersen1995" target="_blank">GITHUB</a></li>
                        <li><a href="https://www.linkedin.com/in/jcbpetersen1995/" target="_blank">LINKEDIN</a></li>
                        <li><a href="https://professional-portfolio-jp.herokuapp.com/images/ResumeJP2020.pdf" target ="_blank">RESUME</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;