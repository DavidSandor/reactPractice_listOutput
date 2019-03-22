import React, { Component } from 'react';
import './App.css';

import InputValidator from './InputValidator/InputValidator'

class App extends Component {

state = {
  input: "",
  inputMin: 3,
  inputMax: 10
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
          <InputValidator inputValue={this.state.input} inputMin={this.state.inputMin}/>
        </header>
      </div>
    );
  }
}

export default App;
