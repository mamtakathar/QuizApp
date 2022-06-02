import React from "react";


export default function Header(props){
    return(
    <div>
          <header>
              <a id="leaderboard">View Highscores <i className="fas fa-hand-point-left fa-lg" ></i></a> 
              <p className="label">Time:{props.timer}</p>

          </header>
      
    </div>
    );
    }
   
