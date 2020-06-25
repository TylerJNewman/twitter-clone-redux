import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

const NewTweet = ({ id }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ID", id);
    dispatch(handleAddTweet(text, id));

    setText("");
    console.log("New Tweet ", text);
  };

  const tweetLeft = 200 - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTweet;
