import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

  class App extends Component {
    state = {
      friends,
      score: 0,
      topScore: 15,
      clicked: [],
      message: ""
    } 
  
    shuffleCards = id => {
      let clicked = this.state.clicked;
  
      if (clicked.includes(id)) {
        this.setState({
          clicked: [],
          score: 0,
          message: "Try again!!!"
        })
        return;
      }
      else {
        clicked.push(id);
  
        if (this.state.score === 15) {
          this.setState({
            score: 0,
            clicked: [],
            message: "You are Magic! Play again!"
          })
          return;
        }
  
        this.setState({
          friends,
          clicked,
          score: clicked.length,
          message: ""
        })
        
        for (let i = friends.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [friends[i], friends[j]] = [friends[j], friends[i]];
        }
      }
  
    }
 
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Outsmart the Wizards!</h1>
            <h2 className="App-intro">
              Don't click the same image twice!
            </h2>
          </header>
          <Navbar total={this.state.score} message={this.state.message} goal={15}/>
          <div className= "container-fluid">
          <Wrapper>
            {this.state.friends.map(friends => (
              <FriendCard
                shuffleCards={this.shuffleCards}
                id={friends.id}
                key={friends.id}
                image={friends.image}
              />
            ))}
        
        </Wrapper>
  </div>
        </div>
      )
    }
  }
  
  export default App;