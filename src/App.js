// import logo from './logo.svg';
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <div>
        <SideBar />
      </div>
      <div className="content">контент</div>
    </div>
  );
}

export default App;
