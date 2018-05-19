import React from 'react';
import { connect } from 'react-redux';
import './feedback.css';

export function Feedback(props) {
  const key = props.guessCount;

  return (
    <h2 key={key} id="feedback" role="status" aria-live="assertive" aria-atomic="true">
      {props.feedback}
    </h2>
  );
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length,
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);