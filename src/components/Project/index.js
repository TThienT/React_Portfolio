import React from 'react';
import dungeonImg from "../../assets/projects/Daily Dungeon.png";
import noteImg from "../../assets/projects/Note Taker.png";
import plannerImg from "../../assets/projects/Planner.png";

function Project() {

  return (
    <div>
    <div className="project" key="Daily Dungeon">
    <img
      src={dungeonImg}
      alt="Daily Dungeon RPG"
      className="project-bg"
    />
    <div className="project-text">
      <h3>
        <a href="https://fathomless-brook-62747-69ac2fbd8802.herokuapp.com/">Daily Dungeon</a>{' '}
        <a href="https://github.com/jmcconna/Daily-Dungeon">
          <i className="fab fa-github"></i>
        </a>
      </h3>
      <p>'MERN Stack'</p>
    </div>
  </div>

<div className="project" key="Note Taker">
<img
  src={noteImg}
  alt="Note Taker"
  className="project-bg"
/>
<div className="project-text">
  <h3>
    <a href="https://afternoon-harbor-51161.herokuapp.com/notes">Note Taker</a>{' '}
    <a href="https://github.com/TThienT/Mod_11-Note-Taker">
      <i className="fab fa-github"></i>
    </a>
  </h3>
  <p>'Javascript, RESTful APIs, CSS'</p>
</div>
</div>

<div className="project" key="Daily Planner">
<img
  src={plannerImg}
  alt="Daily Planner"
  className="project-bg"
/>
<div className="project-text">
  <h3>
    <a href="https://tthient.github.io/Mod_5_DailyPlanner/">Daily Mod_5_DailyPlanner</a>{' '}
    <a href="https://github.com/TThienT/Mod_5_DailyPlanner">
      <i className="fab fa-github"></i>
    </a>
  </h3>
  <p>'Javascript, HTML, CSS'</p>
</div>
</div>

</div>
  );

  
}

export default Project;
