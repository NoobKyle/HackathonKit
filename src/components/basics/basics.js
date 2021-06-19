import React from 'react';
import './basics.css';

import TextField from '@material-ui/core/TextField';


function Basics() {
  return (
      <div className="overview">
        <h4>Basics</h4>
        <h5>Title</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />

        <h5>Highlights</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>

        <h5>Description</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
      </div>
  );
}

export default Basics;
