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

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  selectPicture = selectedPictureId => {
    console.log(this.state.unselectedPictures);
    console.log(selectedPictureId);
    const findPictures = this.state.unselectedPictures.find(
      picture => picture.id === selectedPictureId
    );

    if (findPictures === undefined) {
      console.log(findPictures);
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
      const newUnselectedPictures = this.state.unselectedPictures.filter(
        picture => picture.id !== selectedPictureId
      );

      this.setState({
        message: "You Got it Right!",
        currentScore: this.state.currentScore + 1,
        pictures: pictures,
        unselectedPictures: newUnselectedPictures
      });
    }

    this.shuffleArray(pictures);
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
          
        />

        <Header>Don't Click The Same Picture Twice</Header>
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
