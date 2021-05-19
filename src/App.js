import "./App.css";
import Chat from "./Chat";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app ">
      <div className="app_body">
        <SideBar></SideBar>

        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
