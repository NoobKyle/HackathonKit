import React from 'react';
import './devfailstory.css';
import banner from "./devfailstory.png";

import Button from '@material-ui/core/Button';

function Devfailstory() {
  return (
      <div className="devfailstory">
        <img className="banner" src={banner}/>

        <p>Behind every success story is an embarrassing first effort, a stumble,
          a setback or a radical change of direction. It’s these first clumsy
          steps on the road to fame and fortune that has brought this platform
          to life, a collection of case studies on the lessons learned thanks
          to failure.
        </p>

        <p>Hey, My name is Kyle, a 17 year old Full-Stack Developer and tech
        fanatic who build dev fail story after reading an article about how a
        local developer accidentaly deleted all contents of a production
        database at a company he was working at. He later then found out
        that the 'mistake' was actually the result of a zero-day vulnerability
        which then later led to him earning a fortune after reporting it.
        <br/><br/>
        I then noticed that of all the amazing developers around the world,
        there is one thing missing...
        <br/><br/>
        Their amazing 'failure' stories.
        <br/><br/>
        So my mission to build a platform where developers around the world
        can share and learn from other developer stories had began and this
        was the birth of dev fail story.
        </p>
        <Button color="primary" fullWidth onClick={() => { alert("Redirecting to DevFailStory")}}>-- Enter Portal --</Button>
      </div>
  );
}

export default Devfailstory;
