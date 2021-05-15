import React from "react";
import { auth } from "../firebase";
export const Feed = () => {
  return (
    <div>
      Feeds
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
