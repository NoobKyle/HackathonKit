import React from 'react';
import './project.css';

import TextField from '@material-ui/core/TextField';

function Project() {
  return (
      <div className="overview">
        <h4>Project</h4>
        <h5>Title</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
        <br/> <br/>

        <h5>Features</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={4}/>
        <br/> <br/>

        <h5>Description</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
        <br/> <br/>

        <h5>Benefits</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
        <br/> <br/>

        <h5>Tech Stack</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>
        <br/> <br/>
        
        <h5>Challenges Faced</h5>
        <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
        <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth multiline rows={6}/>

        <br/> <br/> <br/>
        <hr/>
      </div>
  );
}

export default Project;
