import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import InfoSection from './info-section';
import GuessSection from './guess-section';
import StatusSection from './status-section';

import { makeGuess, displayInfo, restartGame } from '../actions';

export class Game extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
      this.props.dispatch(makeGuess(guess));
  }

  displayInfo(flag) {
    this.props.dispatch(displayInfo(flag));
  }
  
  render() {
    const { feedback, guesses, showInfo } = this.props;
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

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses,
  showInfo: state.showInfo
});

export default connect(mapStateToProps)(Game);