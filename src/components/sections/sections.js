import React from 'react';
import './sections.css';

import Button from '@material-ui/core/Button';

function Sections() {
  return (
      <div className="overview">
      <h3>Project</h3>
      <Button className="button" href="/overview">Overview</Button><br/>
      <Button className="button" href="/team">Team</Button><br/>
      <Button className="button" href="/project">Project</Button><br/>
      <Button className="button" href="/pitch">Pitch</Button><br/>

      <h3>Learn</h3>
      <Button className="button" href="/overview">Platform</Button><br/>
      <Button className="button" href="/overview">Hackathons</Button><br/>
      <Button className="button" href="/overview">Resources</Button><br/>
      </div>
  );
}

export default Sections;
