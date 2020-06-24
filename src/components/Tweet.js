import React from "react";
import { formatTweet } from "../utils/helpers";
import { connect } from "react-redux";

const Tweet = ({ tweet }) => {
  console.log(tweet);
  return <div className="tweet"></div>;
};

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser),
  };
};

export default connect(mapStateToProps)(Tweet);
