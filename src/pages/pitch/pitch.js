import React from 'react';
import './pitch.css';

import TextField from '@material-ui/core/TextField';

function Pitch() {
  return (
      <div className="overview">
        <h4>Pitch</h4>
        <h5>Project Images</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
        <br/> <br/>

        <h5>Power Point Files</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>
        <br/> <br/>

        <h5>YouTube Demo Link</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth/>
        <br/> <br/>

        <br/> <br/> <br/>
        <hr/>
      </div>
  );
}

export default Pitch;
