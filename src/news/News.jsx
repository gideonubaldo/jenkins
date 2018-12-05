import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class News extends Component {
  render() {
    return (
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="Rocketpay1"
      options={{height: 400}}
    />
    );
  }
};

export default News;