import React from 'react';
import { useSelector } from "react-redux";
import './overview.css';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Overview() {
  const teamName = useSelector(state => state.overview.teamname);
  const teamMembers = useSelector(state => state.overview.teamname);

  const projectName = useSelector(state => state.overview.projectname);
  const features = useSelector(state => state.overview.projectfeatures);
  const description = useSelector(state => state.overview.description);
  const projectBenefits = useSelector(state => state.overview.benefits);
  const techStack = useSelector(state => state.overview.techstack);
  const projectChallenges = useSelector(state => state.overview.challenges);

  const [screenshots, setScreenshots] = React.useState(false);
  const [presentation, setPresentation] = React.useState(false);
  const [demoVideo, setDemoVideo] = React.useState(false);
  const [githubRepo, setGithubRepo] = React.useState(false);

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
      <h4>Team</h4>
      <FormControlLabel control={ <Checkbox checked={teamName} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Team Name" /><br/>
      <FormControlLabel control={ <Checkbox checked={teamMembers} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Team Members" /><br/>

      <h4>Project</h4>
      <FormControlLabel control={ <Checkbox checked={projectName}  inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Name" /><br/>
      <FormControlLabel control={ <Checkbox checked={features} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Features" /><br/>
      <FormControlLabel control={ <Checkbox checked={description} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Description" /><br/>
      <FormControlLabel control={ <Checkbox checked={projectBenefits} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Benefits" /><br/>
      <FormControlLabel control={ <Checkbox checked={techStack} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Tech Stack" /><br/>
      <FormControlLabel control={ <Checkbox checked={projectChallenges}  inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Project Challenges" /><br/>

      <h4>Pitch Resources</h4>
      <FormControlLabel control={ <Checkbox checked={screenshots} onChange={handleChange8} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Screenshots" /><br/>
      <FormControlLabel control={ <Checkbox checked={presentation} onChange={handleChange9} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Presentation" /><br/>
      <FormControlLabel control={ <Checkbox checked={demoVideo} onChange={handleChange10} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Demo Video Link" /><br/>
      <FormControlLabel control={ <Checkbox checked={githubRepo} onChange={handleChange11} inputProps={{ 'aria-label': 'primary checkbox' }}/> } label="Github Repo Link" /><br/>
      </div>
  );
}

export default Overview;
