import React from 'react';
import './overview.css';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Overview() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
      <div className="overview">
      <h3>Overview</h3>
      <h4>Project's page</h4>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Highlights" /><br/>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Description" /><br/>

      <h4>Pitch Resources</h4>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      </div>
  );
}

export default Overview;
