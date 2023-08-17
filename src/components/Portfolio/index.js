import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [project] = useState([
    {
      name: 'Daily Dungeon',
      description: 'REACT',
      link: "https://fathomless-brook-62747-69ac2fbd8802.herokuapp.com/",
      repo: "https://github.com/jmcconna/Daily-Dungeon.git"
    },
    {
      name: 'Note Taker',
      description: 'Add Descrip',
      link: "https://afternoon-harbor-51161.herokuapp.com/notes",
      repo: "https://github.com/TThienT/Mod_11-Note-Taker"
    },
    {
      name: 'Daily Planner',
      description: 'Add Descrip',
      link: "https://tthient.github.io/Mod_5_DailyPlanner/",
      repo: "https://github.com/TThienT/Mod_5_DailyPlanner"
    },

  ]);

  return (
    <div>
      <div className="flex-row">
          <Project/>
      </div>
    </div>
  );
};

export default Portfolio;
