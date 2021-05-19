import React from "react";
import { auth } from "../firebase";
import TweetInput from "./TweetInput";

export const Feed = () => {
  return (
    <div>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
