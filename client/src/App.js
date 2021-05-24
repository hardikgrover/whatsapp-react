import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import SideBar from "./SideBar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app ">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app_body">
          <Router>
            <SideBar></SideBar>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
