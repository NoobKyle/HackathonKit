import React from 'react';
import './sections.css';

import Button from '@material-ui/core/Button';

function Sections() {
  return (
      <div className="overview">
      <h3>Project</h3>
      <Button className="button" href="/overview">Overview</Button><br/>
      <Button className="button" href="/basics">Basics</Button><br/>
      <Button className="button" href="/pitch">Pitch</Button><br/>

      <h3>Learn</h3>
      <Button className="button" href="/overview">Overview</Button><br/>
      <Button className="button" href="/overview">Basics</Button><br/>
      <Button className="button" href="/overview">Technicals</Button><br/>
      </div>
  );
}

export default Sections;
