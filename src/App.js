import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'PipiKaka'
  };

  nameChangeHandler = (event) => {
    this.setState({userName: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.username} change={this.nameChangeHandler}/>
        <UserOutput userName={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
