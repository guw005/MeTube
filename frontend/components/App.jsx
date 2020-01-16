import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UserSidebarContainer from "./user_sidebar/user_sidebar_container";
import VideoIndexContainer from "./videos/video_index_container";
import VideoShowContainer from "./videos/video_show_container";
import ModalContainer from "./modal/modal_container";
import UpperbarContainer from "./upper_bar/upper_bar_container";

const App = () => (
  <div>
    <ModalContainer />
    <div className="user-sidebar">
      <UpperbarContainer />
      <UserSidebarContainer />
    </div>
    <Switch>
      <Route exact path="/" component={VideoIndexContainer} />
      <Route exact path="/videos/:videoId" component={VideoShowContainer} />
    </Switch>
  </div>
);

export default App;
