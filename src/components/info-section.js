import React from 'react';
import { connect } from 'react-redux';
import './info-section.css';
import { displayInfo } from '../actions';

export class InfoSection extends React.Component {
  displayInfo(flag) {
    this.props.dispatch(displayInfo(flag));
  }

  render() {
    return (
      <div>
        <section id="what" tabIndex="-1">
          <h1>What do I do?</h1>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <ol>
            <li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
            <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
            <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
          </ol>
          <br />
          <button onClick={() => this.displayInfo(false)}>Got it!</button>
          <br />
        </section>
      </div>
    )
  }
}

export default connect()(InfoSection);