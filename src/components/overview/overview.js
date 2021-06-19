import React from 'react';
import './overview.css';

import Checkbox from '@material-ui/core/Checkbox';

function Overview() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
      <div className="overview">
      <h3>Overview</h3>
      <h4>Create your project's page</h4>
      <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
      <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
      <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>

      <h4>Pitch Resources</h4>
      <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
      <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
      <Checkbox label="Project Name" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/><br/>
      </div>
  );
}

export default Overview;
