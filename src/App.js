import 'bootstrap/dist/css/bootstrap.min.css';



import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
      // yourscore,
      // topscore
  };

  // 0 = yourscore , topscore
  // score [0] = { yourscore: 1231, topscore: 1231 }
  // const score = {
  //   yourscore,
  //   topscore
  // }
// function to shuffle the array
 shuffle = array => {
  array.sort(() => Math.random() - 0.5);
}


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    //console.log ("image id : " + this.friend.id);
    console.log ("image id2  : " + id);

    this.setState({ friends });
  };


    score  = id => {
      console.log ("id ; " + id);
    let topscore = 0;
    let yourscore = 0;
    // loop though and match id to the clicked item;
    console.log ("clicked : " + this.state.friends); 
    //console.log ("clicked : " + this.state.friends[id].clicked); 
    
    if (this.state.friends.clicked === 0) {
      yourscore++;
      console.log ("yourscore : " + yourscore)
      //this.friends.clicked === true;
    }
    else {
      if (topscore<yourscore) {
        topscore = yourscore;
        yourscore = 0;
     }
    }
    // how do i change the arrangment of the photos?
    // is this correct?

    // eslint-disable-next-line no-undef
    // use this.setstae to fix this and the clicked issue
    let randomFriends = this.state.friends.sort(() => Math.random() - 0.5); 
    this.setState({ randomFriends });

    console.log ("new array : " + this.state.friends[0].name); 
    
    console.log ("topscore : " + topscore)



    //return yourscore && topscore;
  
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar yourScore ={this.state.yourscore} />
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            score = {this.score}
            //removeFriend={this.removeFriend}
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
