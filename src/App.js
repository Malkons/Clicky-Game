import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    message: "Click a Picture to Begin!",
    topScore: 0,
    currentScore: 0,
    pictures: pictures,
    unselectedPictures: pictures
  };

  componentDidMount() {}
  // shufflesArray function shuffles the pictures
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  // When a picture is clicked
  selectPicture = selectedPictureId => {
    console.log(this.state.unselectedPictures);
    console.log(selectedPictureId);
    // Finds an object in the array by its Id
    const findPictures = this.state.unselectedPictures.find(
      picture => picture.id === selectedPictureId
    );
    //Checks to
    if (findPictures === undefined) {
      console.log(findPictures);
      // Resets the state, updates the topscore if nessary.
      this.setState({
        message: "You Got it Wrong!",
        topScore:
          this.state.currentScore > this.state.topScore
            ? this.state.currentScore
            : this.state.topScore,
        currentScore: 0,
        pictures: pictures,
        unselectedPictures: pictures
      });
    } else {
      // Filters all elements that pass the test implemented by the provided function
      const newUnselectedPictures = this.state.unselectedPictures.filter(
        picture => picture.id !== selectedPictureId
      );
      // Updates the state of currentScore
      this.setState({
        message: "You Got it Right!",
        currentScore: this.state.currentScore + 1,
        pictures: pictures,
        unselectedPictures: newUnselectedPictures
      });
    }
    // Call the Shuffle Function
    this.shuffleArray(pictures);
  };
  // Render the page
  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Header message={this.state.message}>
          Don't Click The Same Picture Twice, Try and Get to 12!
        </Header>
        {this.state.pictures.map(picture => (
          <Card
            id={picture.id}
            image={picture.image}
            key={picture.id}
            pictureName={picture.name}
            selectPicture={this.selectPicture}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
