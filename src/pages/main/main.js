import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './main.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Sections from '../../components/sections/sections';
import Overview from '../overview/overview';
import Basics from '../basics/basics';

function Main() {
  return (
    <div className="root">
      <h1>Hackathon Kit</h1>

      <Grid container spacing={2} className="gridcontainer">

          <Grid item xs={3}>
            <Sections/>
          </Grid>

          <Grid item xs={9}>
            <Router>
              <Switch>

                <Route path="/overview">
                  <Overview/>
                </Route>

                <Route path="/basics">
                  <Basics/>
                </Route>

              </Switch>
            </Router>
          </Grid>

      </Grid>
    </div>
  );
}

export default Main;
