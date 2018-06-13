import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    teams: [
      'France', 'Australia'
    ]
  }

  switchTeamOrderHandler = () => {
    this.setState({
      teams: [
        'Australia', 'Argentin'
      ]
    })
  }
  //onChange={props.change}
  render() {
    return(
      <div className="App">
        <UserOutput 
          firstTeam="Iceland"
          secondTeam="Argentin"/>
        <UserOutput 
          firstTeam="Germany"
          secondTeam="Mexico"/>
        <UserOutput 
          firstTeam={this.state.teams[0]}
          secondTeam={this.state.teams[1]}/>
     
        <button 
          onClick={this.switchTeamOrderHandler}>Change last winner
        </button>
      </div>
    )
  }
}

export default App;
