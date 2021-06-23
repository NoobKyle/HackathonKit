import React from 'react';
import './overview.css';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Overview() {
  const [checked, setChecked] = React.useState(true);
  const [teamName, setTeamName] = React.useState(false);
  const [teamMembers, setTeamMembers] = React.useState(false);
  const [projectName, setProjectName] = React.useState(false);
  const [description, setDescription] = React.useState(false);
  const [projectBenefits, setProjectBenefits] = React.useState(false);
  const [techStack, setTechStack] = React.useState(false);
  const [projectChallenges, setProjectChallenges] = React.useState(false);
  const [screenshots, setScreenshots] = React.useState(false);
  const [presentation, setPresentation] = React.useState(false);
  const [demoVideo, setDemoVideo] = React.useState(false);
  const [githubRepo, setGithubRepo] = React.useState(false);

  const handleChange = (e, name) => {
    setChecked(e.target.checked);
  }
  const handleChange1 = (e, name) => {
    setTeamName(e.target.checked);
  }
  const handleChange2 = (e, name) => {
    setTeamMembers(e.target.checked);
  }
  const handleChange3 = (e, name) => {
    setProjectName(e.target.checked);
  }
  const handleChange4 = (e, name) => {
    setDescription(e.target.checked);
  }
  const handleChange5 = (e, name) => {
    setProjectBenefits(e.target.checked);
  }
  const handleChange6 = (e, name) => {
    setTechStack(e.target.checked);
  }
  const handleChange7 = (e, name) => {
    setProjectChallenges(e.target.checked);
  }
  const handleChange8 = (e, name) => {
    setScreenshots(e.target.checked);
  }
  const handleChange9 = (e, name) => {
    setPresentation(e.target.checked);
  }
  const handleChange10 = (e, name) => {
    setDemoVideo(e.target.checked);
  }
  const handleChange11 = (e, name) => {
    setGithubRepo(e.target.checked);
  }

  return (
      <div className="overview">
      <h3>Overview</h3>
      <h4>Project's page</h4>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      <FormControlLabel control={ <Checkbox checked={teamName} onChange={handleChange1} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Team Name" /><br/>
      <FormControlLabel control={ <Checkbox checked={teamMembers} onChange={handleChange2} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Team Members" /><br/>
      <FormControlLabel control={ <Checkbox checked={projectName} onChange={handleChange3} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Name" /><br/>
      <FormControlLabel control={ <Checkbox checked={description} onChange={handleChange4} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Description" /><br/>
      <FormControlLabel control={ <Checkbox checked={projectBenefits} onChange={handleChange5} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Benefits" /><br/>
      <FormControlLabel control={ <Checkbox checked={techStack} onChange={handleChange6} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Tech Stack" /><br/>
      <FormControlLabel control={ <Checkbox checked={projectChallenges} onChange={handleChange7} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Challenges" /><br/>
      <FormControlLabel control={ <Checkbox checked={screenshots} onChange={handleChange8} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Screenshots" /><br/>
      <FormControlLabel control={ <Checkbox checked={presentation} onChange={handleChange9} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Presentation" /><br/>
      <FormControlLabel control={ <Checkbox checked={demoVideo} onChange={handleChange10} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Demo Video Link" /><br/>
      <FormControlLabel control={ <Checkbox checked={githubRepo} onChange={handleChange11} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Github Repo Link" /><br/>

      <h4>Pitch Resources</h4>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Title" /><br/>
      </div>
  );
}

export default Overview;
