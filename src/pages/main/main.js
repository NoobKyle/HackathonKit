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

import Resources from '../learn/resources';

import Devfailstory from '../devfailstory/devfailstory';

function Main() {
  return (
    <div className="root">
      <Navbar/>

      <Grid container spacing={2} className="gridcontainer">

          <Grid item xs={2}>
            <Sections/>
          </Grid>

          <Grid item xs={6}>
            <Router>
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

                <Route path="/resources">
                  <Resources/>
                </Route>

                <Route path="/devfailstory">
                  <Devfailstory/>
                </Route>

              </Switch>
            </Router>
          </Grid>

          <Grid item xs={4}>
            <h3>Twitter Feed</h3>
            <Twitter/>
          </Grid>

      </Grid>
    </div>
  );
}

export default Main;
