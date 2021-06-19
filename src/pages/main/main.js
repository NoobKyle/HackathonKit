import React from 'react';
import './main.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

function Main() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <div className="root">
      <h1>Hackathon Kit</h1>

      <Grid container spacing={2} className="gridcontainer">
          <Grid item xs={4}>
            <h3>Project</h3>
            <Button className="button">Overview</Button><br/>
            <Button className="button">Basics</Button><br/>
            <Button className="button">Technicals</Button><br/>

            <h3>Learn</h3>
            <Button className="button">Overview</Button><br/>
            <Button className="button">Basics</Button><br/>
            <Button className="button">Technicals</Button><br/>
          </Grid>
          <Grid item xs={8}>
            <h3>Overview</h3>
            <h4>Create your project's page</h4>
            <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
            <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
            <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>

            <h4>Pitch Resources</h4>
            <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
            <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
            <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>

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
          </Grid>
      </Grid>
    </div>
  );
}

export default Main;
