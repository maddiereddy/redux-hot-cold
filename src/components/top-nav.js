import React from 'react';
import { connect } from 'react-redux';
import './top-nav.css';
import { restartGame, displayInfo } from '../actions';

export class TopNav extends React.Component {
  displayInfo(flag) {
    this.props.dispatch(displayInfo(flag));
  }

  restartGame() {
    const correctAnswer = Math.floor(Math.random() * 100) + 1;
    this.props.dispatch(restartGame(correctAnswer));
  }

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a href="#what" className="what" aria-label="How to play"
              onClick={() => this.displayInfo(true)}> What?
            </a>
          </li>
          <li>
            <a href="#restart" className="new" aria-label="Start a new game" 
              onClick={() => this.restartGame()}> + New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(TopNav);