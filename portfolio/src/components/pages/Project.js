import React from 'react';
import '../style/Project.css';

function Project(props) {
    return (
        <div className="card">
  <img className="card-img" src={props.image} alt={props.alt} />
  {/* <div className="card-img-overlay">
  <a href={props.github} target="_blank" role="button" className="btn btn-success btn-sm">Github Repo</a>
    <a href={props.link} target="_blank" className="btn btn-success btn-sm">Tripoints</a>
    
  </div> */}
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <hr />
    {/* <small className="text-muted cat">
      <i className="far fa-clock text-info"></i> 30 minutes
    </small> */}
    <p className="card-text">{props.description}</p>
    <a href={props.github} target="_blank" className="btn btn-sm btn-block">Github Repository</a>
    <a href={props.link} target="_blank" className="btn btn-sm btn-block">{props.title}</a>
    {props.team}
  <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">

  </div>
</div>
</div>

    )
};

export default Project;