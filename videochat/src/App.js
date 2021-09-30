import React from "react";

import { Typography, AppBar } from "@material-ui/core";
import Notification from "./components/Notification";
import VideoPlayer from "./components/VideoPlayer";
import Option from "./components/Options";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Vide chating
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Option>
        <Notification />
      </Option>
    </div>
  );
};

export default App;
