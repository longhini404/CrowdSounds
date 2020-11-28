import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import HomeArtist from "./pages/HomeArtist/HomeArtist";

import HomeUser from "./pages/HomeUser/HomeUser";

import Donate from "./pages/Donate/Donate";
import SingleCrowdfunding from "./pages/Crowdfunding/Crowdfunding";
import KeepCrowdfunding from "./pages/KeepCrowdfunding/KeepCrowdfunding";

import CreateArtist from "./pages/CreateArtist/CreateArtist";

import KeepArtist from "./pages/KeepArtist/KeepArtist";
import KeepUser from "./pages/KeepUser/KeepUser";

import KeepContact from "./pages/KeepContact/KeepContact";
import KeepMerchandising from "./pages/KeepMerchandising/KeepMerchandising";
import KeepWireframe from "./pages/KeepWireframe/KeepWireframe";
import KeepDiscography from "./pages/KeepDiscography/KeepDiscography";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import HomeADM from "./pages/HomeADM/HomeADM";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/homeArtist" component={HomeArtist} />
            <Route exact path="/homeArtist/:id" component={HomeArtist} />

            <Route exact path="/homeUser" component={HomeUser} />
            <Route exact path="/homeUser/:id" component={HomeUser} />

            <Route exact path="/donate/:id" component={Donate} />
            <Route
              exact
              path="/crowdfunding/:id"
              component={SingleCrowdfunding}
            />
            <Route
              exact
              path="/keepCrowdfunding"
              component={KeepCrowdfunding}
            />

            <Route exact path="/createArtist" component={CreateArtist} />

            <Route exact path="/keepArtist/:id" component={KeepArtist} />
            <Route exact path="/keepUser/:id" component={KeepUser} />

            <Route exact path="/HomeADM" component={HomeADM} />
            <Route
              exact
              path="/KeepMerchandising"
              component={KeepMerchandising}
            />

            <Route exact path="/KeepContact" component={KeepContact} />
            <Route exact path="/keepWireframe" component={KeepWireframe} />
            <Route exact path="/keepDiscography" component={KeepDiscography} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
