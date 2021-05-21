import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import SideBar from "./SideBar";

function App() {
  const [user, setuser] = useState("hardik");
  return (
    <div className="app ">
      {!user ? (
        <h1>Login</h1>
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
