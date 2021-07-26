import React from 'react';
import './learn.css';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Resources() {
  return (
      <div className="resources">
        <h4>Resources</h4><br/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="">Tutorials</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             <a href="https://javascript30.com/" target="_blank" rel="noreferrer">Wes Bos Javascript 30</a><p> - Free vanilla Javascript course covering the basics of Javascript.</p><br/><br/>
             <a href="https://egghead.io/" target="_blank" rel="noreferrer">Egghead.io</a><p> - A Mix of free and paid courses for Front End Frameworks and Javascript.</p><br/><br/>
             <a href="www.linkedin.com/learning" target="_blank" rel="noreferrer">Linkedin Learning</a><p> - A library of courses on a full range of a variety of topics. This was Lynda before.</p><br/><br/>
             <a href="http://guide.bash.academy" target="_blank" rel="noreferrer">The Bash Guide</a><p> - Very good guide for learning the Bash Shell.</p><br/><br/>
             <a href="https://wildlyinaccurate.com/a-hackers-guide-to-git/" target="_blank" rel="noreferrer">A Hacker's Guide to Git</a><p> - For those wanting to learn git with a solid foundation.</p><br/><br/>
             <a href="https://www.udacity.com/course/ud015" target="_blank" rel="noreferrer">Object-Oriented JavaScript</a><p> - Learn how to utilize the various object-oriented programming features within JavaScript, and more importantly, how to write reusable and maintainable libraries.</p><br/><br/>
             <a href="https://www.udacity.com/course/ud989" target="_blank" rel="noreferrer">JavaScript Design Patterns</a><p> - Free course to learn the importance of separating concerns when writing JavaScript, gaining hands-on experience along the way.</p><br/><br/>
             <a href="http://htmldog.com/guides/javascript/advanced/" target="_blank" rel="noreferrer">JavaScript Advanced Tutorial by HTML Dog</a><p> - Advanced JS tutorial.</p><br/><br/>
             <a href="https://codehs.com/info/curriculum/introjs" target="_blank" rel="noreferrer">Intro to Computer Science in JavaScript</a><p> - An online course to help bring CS into Highschools.</p><br/><br/>
             <a href="https://javascript30.com/" target="_blank" rel="noreferrer">Wes Bos JavaScript 30</a><p> - Free vanilla JavaScript course covering the basics of JavaScript.</p><br/><br/>
             <a href="https://egghead.io/" target="_blank" rel="noreferrer">Egghead.io</a><p> - A Mix of free and paid courses for Front End Frameworks and JavaScript.</p><br/><br/>
             <a href="https://www.freecodecamp.org/learn/" target="_blank" rel="noreferrer">freeCodeCamp</a><p> - Tutorials that cover a variety of topics, e.g. web design, algorithms, data visualization etc.</p><br/><br/>
             <a href="https://flukeout.github.io/" target="_blank" rel="noreferrer">CSS Diner</a><p> - A game to learn and practice CSS selectors.</p><br/><br/>
             <a href="http://cssgridgarden.com/" target="_blank" rel="noreferrer">CSS Grid Garden</a><p> - Easy game to learn CSS Grid.</p><br/><br/>
             <a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">Flexbox Froggy</a><p> - A game to learn CSS flexbox.</p><br/><br/>
             <a href="https://www.udacity.com/course/ud015" target="_blank" rel="noreferrer">Object-Oriented JavaScript</a><p> - Learn how to utilize the various object-oriented programming features within JavaScript, and more importantly, how to write reusable and maintainable libraries.</p><br/><br/>
             <a href="https://www.udacity.com/course/ud989" target="_blank" rel="noreferrer">JavaScript Design Patterns</a><p> - Free course to learn the importance of separating concerns when writing JavaScript, gaining hands-on experience along the way</p><br/><br/>
             <a href="http://htmldog.com/guides/javascript/advanced/" target="_blank" rel="noreferrer">JavaScript Advanced Tutorial by HTML Dog</a><p> - Advanced JS tutorial</p><br/><br/>
             <a href="https://codehs.com/info/curriculum/introjs" target="_blank" rel="noreferrer">Intro to Computer Science in JavaScript</a><p> - An online course to help bring CS into High schools.</p><br/><br/>
             <a href="https://fullstackopen.com/en/" target="_blank" rel="noreferrer">Fullstack JavaScript Guide</a><p> - A complete dive into client and serverside JavaScript. Even with graphql, testing and state management.</p><br/><br/>
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="">Popular Tools</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="https://regex101.com">regex101</a><p> - Online regex tester and debugger: PHP, PCRE, Python, Golang and JavaScript.</p><br/><br/>
              <a href="http://templates.mailchimp.com/resources/inline-css/">CSS Inliner</a><p> - Automatically inline your email’s CSS</p><br/><br/>
              <a href="http://nth-test.com/">NTH-Test</a><p> - nth-child and nth-of-type Tester</p><br/><br/>
              <a href="http://www.whatfontis.com/">What Font Is</a><p> - Identify font from a image</p><br/><br/>
              <a href="http://stylifyme.com/">Stylify Me</a><p> - Overview of the style guide of a site, including colors, fonts, sizing and spacing</p><br/><br/>
              <a href="http://codepen.io/">CodePen</a><p> - A showcase of advanced techniques with editable source code</p><br/><br/>
            - [Can I Use](http://caniuse.com/) - Up-to-date browser support tables for support of front-end web technologies
            - [CSS Triggers](http://csstriggers.com/) - An invaluable reference on how CSS affects performance
            - [Pesticide](http://pesticide.io/) - Chrome Extension for CSS layout debugging
            - [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) - Analyzes website and suggest ways to make it load faster
            - [Helium](https://github.com/geuis/helium-css) - JavaScript tool to scan your site and show unused CSS
            - [TinyPNG](https://tinypng.com/) - Advanced lossy compression for PNG images
            - [JS Object Explorer](https://sdras.github.io/object-explorer/) - A tool to help you find the object method you need without digging through the docs
            - [Keycode Info](http://keycode.info/) - A good reference app built by Wes Bos to tell you what keystroke number you need
            - [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool) - A great way to test urls to see if your data and markup are being rendered correctly
            - [30 Seconds of CSS](https://atomiks.github.io/30-seconds-of-css/) - A curated collection of useful CSS snippets you can understand in 30 seconds or less.
            - [Devdocs](https://devdocs.io) - A compendium of the docs from major tech tools. Cuts down on tabs!
            - [Command Line Reference](https://ss64.com/) - A list of all of the commands you can use in Bash, macOS, CMD, Powershell, Access, VB Script, Oracle, SQL Server, ASCII, Convert MB/BG, Forum, and Passwords.
            - [Postman](https://www.getpostman.com/) - Allows developers to doucment, design, build, mock and test API's from local machine
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="">Articles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
  );
}

export default Resources;
