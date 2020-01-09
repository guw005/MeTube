import React from "react";
import {Route} from "react-router-dom";
import UserSidebarContainer from "./user_sidebar/user_sidebar_container";


const App = () => (
  <div>
    <header>
      
      <UserSidebarContainer />
    </header>
  </div>
);

export default App;
