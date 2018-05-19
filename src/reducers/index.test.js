import { reducer } from './index';
import { restartGame, makeGuess, displayInfo } from '../actions';

describe('Reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfo).toEqual(false);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('restartGame', () => {
    it('Should start a new game', () => {
      let state = {
          guesses: [1, 2, 3, 4],
          feedback: 'Awesome',
          correctAnswer: 4
      };
      const correctAnswer = 10;
      state = reducer(state, restartGame(correctAnswer));
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toEqual(correctAnswer);
      expect(state.showInfo).toEqual(false);
    });
  });

  describe('makeGuess', () => {
    it('Should make a guess', () => {
      let state = {
          guesses: [],
          feedback: '',
          correctAnswer: 100
      };

      state = reducer(state, makeGuess(25));
      expect(state.guesses).toEqual([25]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(60));
      expect(state.guesses).toEqual([25, 60]);
      expect(state.feedback).toEqual("You're Cold...");

      state = reducer(state, makeGuess(80));
      expect(state.guesses).toEqual([25, 60, 80]);
      expect(state.feedback).toEqual("You're Warm.");

      state = reducer(state, makeGuess(97));
      expect(state.guesses).toEqual([25, 60, 80, 97]);
      expect(state.feedback).toEqual("You're Hot!");

      state = reducer(state, makeGuess(99));
      expect(state.guesses).toEqual([25, 60, 80, 97, 99]);
      expect(state.feedback).toEqual("You're Burnin!");

      state = reducer(state, makeGuess(100));
      expect(state.guesses).toEqual([25, 60, 80, 97, 99, 100]);
      expect(state.feedback).toEqual('You got it!');
    });
  });

  describe('displayInfo', () => {
    it('Can display game rules', () => {
      let state = {
        guesses: [],
        feedback: '',
        correctAnswer: 100
      };
      state = reducer(state, displayInfo(true));
      expect(state.showInfo).toEqual(true);
    });
  });
});