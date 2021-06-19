import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './main.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Overview from '../../components/overview/overview';
import Basics from '../../components/basics/basics';

function Main() {
  return (
    <div className="root">
      <h1>Hackathon Kit</h1>

      <Grid container spacing={2} className="gridcontainer">
          <Grid item xs={4}>
            <h3>Project</h3>
            <Button className="button" href="/overview">Overview</Button><br/>
            <Button className="button" href="/basics">Basics</Button><br/>
            <Button className="button" href="/technicals">Technicals</Button><br/>

            <h3>Learn</h3>
            <Button className="button" href="/overview">Overview</Button><br/>
            <Button className="button" href="/overview">Basics</Button><br/>
            <Button className="button" href="/overview">Technicals</Button><br/>
          </Grid>
          <Grid item xs={8}>
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
