import React from 'react';
import './feedback.css';

export default function Feedback(props) {
  return (
    <h2 id="feedback" role="status" aria-live="assertive" aria-atomic="true">
      {props.feedback}
    </h2>
  );
}