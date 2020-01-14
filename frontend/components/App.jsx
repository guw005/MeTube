import React from "react";
import { Route, Switch } from "react-router-dom";
import UserSidebarContainer from "./user_sidebar/user_sidebar_container";
import VideoIndexContainer from "./videos/video_index_container";
import VideoShowContainer from "./videos/video_show_container";


const App = () => (
  <div>
    <header className="upper-header">
      <UserSidebarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={VideoIndexContainer}/>
      <Route exact path="/videos/:videoId" component={VideoShowContainer}/>
    </Switch>
  </div>
);

export default App;
