import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import RepairOrderMainPage from "./components/RepairOrderMainPage";
import MenuAppBar from "./components/AppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar/>
        <RepairOrderMainPage/>
      </div>
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(App)
