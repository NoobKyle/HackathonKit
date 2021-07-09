import React from 'react';
import { Link } from "react-router-dom";
import './sections.css';

import Button from '@material-ui/core/Button';

function Sections() {
  return (
      <div className="overview">
      <h3>Project</h3>
      <Button className="button"><Link to="/overview" className="sectionLink">Overview</Link></Button><br/>
      <Button className="button"><Link to="/team" className="sectionLink">Team</Link></Button><br/>
      <Button className="button"><Link to="/project" className="sectionLink">Project</Link></Button><br/>
      <Button className="button"><Link to="/pitch" className="sectionLink">Pitch</Link></Button><br/>

      <h3>Learn</h3>
      <Button className="button"><Link to="/platform" className="sectionLink">Platform</Link></Button><br/>
      <Button className="button"><Link to="/hackathon" className="sectionLink">Hackathons</Link></Button><br/>
      <Button className="button"><Link to="/resources" className="sectionLink">Resources</Link></Button><br/>

      <br/>
      <h3>Dev Community</h3>
      <Button className="button"><Link to="/devfailstory" className="sectionLink">Dev Fail Story</Link></Button><br/>
      </div>
  );
}

export default Sections;
