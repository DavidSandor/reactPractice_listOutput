import React, { Component } from 'react';
import './App.css';

import InputValidator from './InputValidator/InputValidator'

import CharComponent from './CharComponent/CharComponent'
import './CharComponent/CharComponent.css'

class App extends Component {

state = {
  input: "startinput",
  inputMin: 3,
  inputMax: 10
}

inputChangeHandler = (event) => {
  this.setState({
    input: event.target.value
    }
  )
}

charComponentRemoveHandler = (event, index) => {

  const charArray = this.state.input.split('');
  charArray.splice(index, 1);
  const resultCharArray = charArray.join('');

  this.setState({
    input: resultCharArray
    }
  )
}

  render() {

    const charList = () => {
      const charArray = this.state.input.split('');

     return charArray.map(char => {
        return <CharComponent inputChar={char} click={(event) => this.charComponentRemoveHandler(event, charArray.indexOf(char))}/>
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.inputChangeHandler} value={this.state.input}></input>
          <p>Input length: {this.state.input.length}</p>
          <InputValidator inputValue={this.state.input} inputMin={this.state.inputMin}/>
          <div>
            {charList()}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
