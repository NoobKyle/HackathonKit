import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './main.css';

import Grid from '@material-ui/core/Grid';

import Navbar from '../../components/navbar/navbar';
import Sections from '../../components/sections/sections';
import Twitter from '../../components/twitter/twitter';

import Overview from '../overview/overview';
import Team from '../team/team';
import Project from '../project/project';
import Pitch from '../pitch/pitch';

import Hackkit from '../learn/hackkit';
import Hackathons from '../learn/hackathons';
import Resources from '../learn/resources';

import Devfailstory from '../devfailstory/devfailstory';

function Main() {
  return (
    <div className="maincontainer">
      <Navbar/>

      <Grid container spacing={2} className="gridcontainer">
      <Router>

          <Grid item xs={2}>
            <Sections/>
          </Grid>

          <Grid item xs={6}>
              <Switch>
                <Redirect exact from="/" to="/overview" />

                <Route path="/overview">
                  <Overview/>
                </Route>

                <Route path="/team">
                  <Team/>
                </Route>

                <Route path="/project">
                  <Project/>
                </Route>

                <Route path="/pitch">
                  <Pitch/>
                </Route>

                <Route path="/hackkit">
                  <Hackkit/>
                </Route>

                <Route path="/hackathon">
                  <Hackathons/>
                </Route>

                <Route path="/resources">
                  <Resources/>
                </Route>

                <Route path="/devfailstory">
                  <Devfailstory/>
                </Route>

              </Switch>
          </Grid>

          <Grid item xs={4}>
            <h3>Twitter Feed</h3>
            <Twitter/>
          </Grid>

          </Router>
      </Grid>
    </div>
  );
}

export default Main;
