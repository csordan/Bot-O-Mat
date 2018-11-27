import React, { Component } from 'react';
import "./App.scss";
import Main from "./components/Main";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  robotTasks, robotTasks
    }
  }
  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
