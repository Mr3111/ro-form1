import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import RepairOrderMainPage from "./components/RepairOrderMainPage";
import MenuAppBar from "./components/AppBar";
import ROCard from "./components/ROCard";
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
      <div >
          <MenuAppBar/>
          <Switch>
              <Route path='/' component={RepairOrderMainPage} />
              {/*<Route path='/' component={ROCard} />*/}
          {/*<ROCard/>*/}
          </Switch>
      </div>
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(App)
