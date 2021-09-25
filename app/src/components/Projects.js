import React from 'react';

// create a function to hold project links
const Projects = (prop) => {
    return(
    <div className="card" style={{width: '18rem'}}>
            <img src={prop.projInfo.image} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prop.projInfo.title}</h5>
                    <p className="card-text">{prop.projInfo.description}</p>
                        <a href={prop.projInfo.app_link} className="btn btn-primary">View App!</a>
            </div>
        </div>
    )
}

export default Projects;