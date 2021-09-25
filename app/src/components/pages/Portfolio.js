import React from 'react';
import Projects from '../Projects';

const Portfolio = () => {
    const projInfo = {
            title: 'Boredom Activitiy Selector',
            image: '.../public/demo.gif',
            app_link: "https://casukhelai.github.io/weather_activity_selector/",
            description: "Ever had the rain or snow force you to cancel plans? Ever wake up with no plans? Ever get stuck doing the same thing over and over again? Check out our activity application! Enter your city name, how many people that'll be in your plans, and get a randomly generated activity!"
        }
    
    return(
        <div className="card-info">
            <Projects projInfo={projInfo}/>
        </div>
    )
    
}

export default Portfolio;