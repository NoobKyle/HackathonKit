import React from 'react';
import { useDispatch } from "react-redux";
import './project.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { projectOverview } from "../../store/modules/overview/action";

function Project() {
  const dispatch = useDispatch();

  const verify = () => {
    var projectname = document.getElementById("projectname").value;
    var projectfeatures = document.getElementById("projectfeatures").value;
    var projectdescription = document.getElementById("projectdescription").value;
    var projectbenefits = document.getElementById("projectbenefits").value;
    var projecttechstack = document.getElementById("projecttechstack").value;
    var projectchallenges = document.getElementById("projectchallenges").value;

    // Verify which fields are empty.
    if( projectname == "" || projectfeatures == "" || projectdescription == "" || projectbenefits == "" || projecttechstack == "" || projectchallenges == "" ){
      console.log('Fill In All Fields !');
      dispatch( projectOverview(0) );
      alert("Fill in All Fields !")
    }else{
      console.log('Everything Good To Go !');
      dispatch( projectOverview(6) );
      alert("Saved !!!")
    }
  }

  return (
      <div className="overview">
        <h4>Project</h4>
        <h5>Title</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="projectname" label="" variant="outlined" size="small" fullWidth />
        <br/> <br/>

        <h5>Features</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="projectfeatures" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>
        <br/> <br/>

        <h5>Description</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="projectdescription" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
        <br/> <br/>

        <h5>Benefits</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="projectbenefits" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
        <br/> <br/>

        <h5>Tech Stack</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="projecttechstack" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
        <br/> <br/>

        <h5>Challenges Faced</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="projectchallenges" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>

        <br/> <br/> <br/>
        <Button variant="outlined" color="primary" fullWidth onClick={() => { verify() }}>Save</Button>
        <hr/>
      </div>
  );
}

export default Project;
