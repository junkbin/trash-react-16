import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {"bg" : 'tomato'};

    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground() {
    console.log("Change");
    this.setState({"bg" : 'royalblue'});
  }

  render() {
    return (
      <div className="Make-center H-100 Bgfy" style={{'backgroundColor': this.state.bg}}>
        <input className="btn" style={{background: this.state.bg}} type="button" value="CLICK ME" onClick={this.changeBackground} />
      </div>
    );
  }
}

export default App;
