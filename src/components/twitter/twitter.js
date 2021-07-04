import React from 'react';
import './twitter.css';

import { TwitterTimelineEmbed } from "react-twitter-embed";

function Twitter() {
  return (
      <div className="twitter">
        <TwitterTimelineEmbed
           sourceType="profile"
           screenName="Geekulcha"
           autoHeight
           noScrollbar
          />
      </div>
  );
}

export default Twitter;
