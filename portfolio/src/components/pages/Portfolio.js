import React from 'react';
import Project from './Project';


function Portfolio() {

    return (
        <section>
            <div className="row">
                <div className="col-sm-12">
                    <h1 id="projects">PROJECTS</h1>
                </div>
            </div>
            <div className="card-columns">
                <Project
                    title={"TriPoints"}
                    description={"A beautiful web app providing users with the true costs of owning a brand-new Mercedes-Benz vehicle. The user is presented with fuel costs, services costs, and start prices for all models in the Mercedes-Benz lineup."}
                    image={'https://professional-portfolio-jp.herokuapp.com/images/tri.png'}
                    alt={"TriPoints"}
                    link={'https://tripoint.herokuapp.com/'}
                    github={'https://github.com/MustafaKhairalla/project-duck-2.0'}
                    team={
                        <div className="dropdown">
                            <button className="btn btn-sm btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contributors
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="https://github.com/ameliadavis" target="_blank">Amy Davis</a>
                                <a className="dropdown-item" href="https://github.com/cristian634" target="_blank">Cristian Robinson</a>
                                <a className="dropdown-item" href="https://github.com/MustafaKhairalla" target="_blank">Mustafa Khairalla</a>
                                <a className="dropdown-item" href="https://github.com/jcbpetersen1995" target="_blank">Jake Petersen</a>
                                <a className="dropdown-item" href="https://github.com/Ellen0404" target="_blank">Elena Demidionok</a>
                                </div>
                        </div>
                        }
                     />
                
                <Project
                    title={"Foodecipe"}
                    description={"Foodecipe is a hunger-driven application designed to make finding delicious recipes from around the world easier than ever! Simply open Foodecipe and select a type of food from the drop-down menu. Once a choice is made, the user will be rewarded with six delicious recipes that populate on the screen."}
                    image={'https://professional-portfolio-jp.herokuapp.com/images/food.png'}
                    alt={"Foodecipe"}
                    link={'https://mustafakhairalla.github.io/duck-duck-code/'}
                    github={'https://github.com/MustafaKhairalla/duck-duck-code'}
                    team={
                        <div className="dropdown">
                            <button className="btn btn-sm btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contributors
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="https://github.com/ameliadavis" target="_blank">Amy Davis</a>
                                <a className="dropdown-item" href="https://github.com/cristian634" target="_blank">Cristian Robinson</a>
                                <a className="dropdown-item" href="https://github.com/MustafaKhairalla" target="_blank">Mustafa Khairalla</a>
                                <a className="dropdown-item" href="https://github.com/jcbpetersen1995" target="_blank">Jake Petersen</a>
                              
                                </div>
                        </div> 
                        }
                     />
                <Project
                    title={"Eat-Da-Burger"}
                    description={"A fun web app that allows the user to add a burger to the menu, and then devour it! This app features MYSQL and Express."}
                    image={'https://professional-portfolio-jp.herokuapp.com/images/eat.png'}
                    alt={"Eat Da Burger"}
                    link={'https://eat-da-burger-jp.herokuapp.com/'}
                    github={'https://github.com/jcbpetersen1995/Burger-JP'}
                     />
                <Project
                    title={"Weather Dashboard"}
                    description={"The weather dashboard is simple application designed to show the user weather from around the world. Simply search for a city, and the weather information is populated. The app will display the current weather situation, as well as a five-day forecast. There are also several buttons with popular cities to choose from. Data gathered using AJAX calls to various API's."}
                    image={'https://professional-portfolio-jp.herokuapp.com/images/weather.png'}
                    alt={"Weather Dashboard"}
                    link={'https://jcbpetersen1995.github.io/Weather-Dashboard-Jp/'}
                    github={'https://github.com/jcbpetersen1995/Weather-Dashboard-Jp'}
                     />
                <Project
                    title={"Budget Tracker"}
                    description={"A app that allows the user to add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, they totals populate on screen when brought back online. A progressive web app featuring MongoDB and Mongoose."}
                    image={'https://github.com/jcbpetersen1995/Budget_Tracker_JP/raw/master/Screen%20Shot%202020-05-11%20at%2012.03.43%20PM.png?raw=true'}
                    alt={"Budget Tracker"}
                    link={'https://intense-depths-54332.herokuapp.com/'}
                    github={'https://github.com/jcbpetersen1995/Budget_Tracker_JP'}
                     />
                <Project
                    title={"Employee Directory"}
                    description={"A React application that allows the user to view a list of employees by state, or sort by last name. The data for this app is sourced from randomuser.me."}
                    image={'https://github.com/jcbpetersen1995/Employee_Directory_JP/raw/gh-pages/Screen%20Shot%202020-05-07%20at%2010.15.16%20PM.png?raw=true'}
                    alt={"Employee Directory"}
                    link={'https://github.com/jcbpetersen1995/Employee_Directory_JP'}
                    github={'https://jcbpetersen1995.github.io/Employee_Directory_JP/'}
                     />
            </div>



        </section>

    )
};

export default Portfolio;