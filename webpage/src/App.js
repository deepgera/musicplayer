import './App.css';
import {Mainlayout} from "./layouts/Mainlayout";
import {Context} from "./context";
import {Playlist} from "./pages/Playlist";
import {Player} from "./pages/Player";
import {Contacts} from "./pages/Contacts";
import React from "react";
import {Slides} from "./pages/Slides";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Context>
    <div className="App">
    <Router>
      <Mainlayout/>
      <Switch>
      <Route path="/" exact>
       <Slides/>
      </Route>
      <Route path="/Contacts" exact>
        <Contacts />
      </Route>
      <Route path="/Playlist" exact>
        <Playlist />
      </Route>
      </Switch>
    </Router>
    </div>
    </Context>
  );
}

export default App;
