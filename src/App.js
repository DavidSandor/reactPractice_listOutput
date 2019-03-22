import React, { Component } from 'react';
import './App.css';

class App extends Component {

state = {
  input: ""
}

inputChangeHandler = (event) => {
  this.setState({
    input: event.target.value
    }
  )
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.inputChangeHandler}></input>
          <p>Input length: {this.state.input.length}</p>
        </header>
      </div>
    );
  }
}

export default App;
