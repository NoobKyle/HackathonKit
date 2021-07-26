import './navbar.css';

import Grid from '@material-ui/core/Grid';

function Navbar() {
  return (
    <Grid container>
      <Grid item xs={9}>
        <h1>Hack - Kit</h1>
      </Grid>
      <Grid item xs={3} className="builtby">
        <p>Built with <span style={{color: "red"}}>♥</span> by<a href="https://twitter.com/kyle___t" target="_blank" rel="noreferrer"> Kyle</a></p>
      </Grid>
    </Grid>
  );
}

export default Navbar;
