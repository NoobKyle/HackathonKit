import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './main.css';

import Grid from '@material-ui/core/Grid';

import Sections from '../../components/sections/sections';
import Overview from '../overview/overview';
import Team from '../team/team';
import Project from '../project/project';
import Pitch from '../pitch/pitch';

function Main() {
  return (
    <div className="root">
      <h1>Hackathon Kit</h1>

      <Grid container spacing={2} className="gridcontainer">

          <Grid item xs={2}>
            <Sections/>
          </Grid>

          <Grid item xs={7}>
            <Router>
              <Switch>

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

              </Switch>
            </Router>
          </Grid>

          <Grid item xs={3}>
            <h3>Tweets</h3>
            <p>This is the title that will be used to identify your project on the platform and public internet facing page.</p>
          </Grid>

      </Grid>
    </div>
  );
}

export default Main;
