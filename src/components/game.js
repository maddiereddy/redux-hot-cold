import React from 'react';
import Header from './header';
import InfoSection from './info-section';
import GuessSection from './guess-section';
import StatusSection from './status-section';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1,
      showInfo: false
    };
	}

  displayInfo(showInfo) {
    this.setState({
      showInfo
    });
  }

	restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      showInfo: false
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 3) {
      feedback = 'You\'re Hot!';
    } else if (difference >= 1) {
      feedback = 'You\'re Burnin!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }


	render() {
		const { feedback, guesses, showInfo } = this.state;

    if (!showInfo) {
      return (
        <div>
          <Header 
            onRestartGame={() => this.restartGame()}
            onShowInfo={(flag) => this.displayInfo(flag)}
          />
          <main role="main">
            <GuessSection feedback={feedback} onMakeGuess={guess => this.makeGuess(guess)} />
            <StatusSection guesses={guesses} />
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <InfoSection onShowInfo={(flag) => this.displayInfo(flag)} />
        </div>
      );
    }
		
  }
}	