import React from 'react';
import { useDispatch } from "react-redux";
import './team.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { teamOverview } from "../../store/modules/overview/action";

function Team() {
  const dispatch = useDispatch();

  const verify = () => {
    var teamnamefield = document.getElementById("teamname").value;
    var teammembersfield = document.getElementById("teammembers").value;
    var teamsocialsfield = document.getElementById("teamsocials").value;

    // Verify which fields are empty.
    if( teamnamefield == "" && teammembersfield == "" && teamsocialsfield == "" ){
      console.log('Team Name & Members & Socials is Empty!');
      dispatch( teamOverview(0) );
      alert("Fill in All Fields !")
    }else if( teamnamefield == "" && teammembersfield == ""){
      console.log('Team Name & Members is Empty!');
      alert("Fill in All Fields !")
    }else if( teamnamefield == ""){
      console.log('Team Name is Empty!');
      alert("Fill in All Fields !")
    }else{
      console.log('Everything Good To Go !');
      dispatch( teamOverview(3) );
      alert("Saved !!!")
    }
  }

  return (
      <div className="overview">
        <h4>Team</h4>
        <h5>Team Name</h5>
        <p>This is the name that will be used to identify your team on the platform and public internet facing page.</p>
        <TextField id="teamname" label="" variant="outlined" size="small" fullWidth />

        <h5>Team Members</h5>
        <p>The names of the members that are considered to be part of this team. Full Name & Surname.</p>
        <TextField id="teammembers" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>

        <h5>Team Socials</h5>
        <p>How to reach the team members. Twitter, Github, LinkedIn, Email</p>
        <TextField id="teamsocials" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>

        <br/> <br/> <br/>
        <Button variant="outlined" color="primary" fullWidth onClick={() => { verify() }}>Save</Button>
        <hr/>
      </div>
  );
}

export default Team;
