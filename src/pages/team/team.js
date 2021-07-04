import React from 'react';
import './team.css';

import TextField from '@material-ui/core/TextField';


function Team() {
  return (
      <div className="overview">
        <h4>Team</h4>
        <h5>Team Name</h5>
        <p>This is the name that will be used to identify your team on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />

        <h5>Team Members</h5>
        <p>The names of the members that are considered to be part of this team. Full Name & Surname.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>

        <h5>Team Socials</h5>
        <p>How to reach the team members. Twitter, Github, LinkedIn, Email</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>

        <br/> <br/> <br/>
        <hr/>
      </div>
  );
}

export default Team;