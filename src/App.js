import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

// topscore will keep track of the highest score and yourscore will track user's current score
let topscore = 0;
let yourscore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    yourscore,
    topscore
  };

  //function to shuffle the array
  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  }

  //I couldn't get all of this to work 
  score  = id => {
    console.log ("id ; " + id);

  let currentclicked ;
  let currentscore = this.state.yourscore;
  let bigscore = this.state.topscore;
  for (var x=0; x<12; x++){

    // loop though and match id to the clicked item;

    if (id === this.state.friends[x].id ){
      console.log ("clicked : " + this.state.friends[x].clicked); 
      console.log ("name of clicked : " + this.state.friends[x].name); 
      // currentclicked and currentscore does not respond. current score never goes past 1, do't understand why.
      currentclicked = this.state.friends[x].clicked;
  
      if (currentclicked === 0) {
        currentscore++;
        console.log ("yourscore : " + currentscore)
        this.setState({ currentscore });
        currentclicked = 1;
        console.log ("clicked should be 1  " + this.state.friends[x].clicked)

      }
      else {
        if (bigscore<currentscore) {
          bigscore = currentscore;
        }
        currentscore = 0;
        this.setState({ currentscore });
        this.setState({ bigscore });
      }
    }
  }
  this.setState({ currentclicked });
  this.setState({ currentscore });
  this.setState({ bigscore });

  // the random sorting works
  let randomFriends = this.state.friends.sort(() => Math.random() - 0.5); 
  this.setState({ randomFriends });
 
  console.log ("topscore : " + bigscore)
 
  }

  render() {
    return (
      <Wrapper>
        <Navbar yourScore={this.state.yourscore} totalScore={this.state.topscore} />
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            score = {this.score}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
