import { restartGame, RESTART_GAME, makeGuess, MAKE_GUESS, displayInfo, DISPLAY_INFO} from './index';

describe('restartGame', () => {
  it('Should return the action', () => {
      const correctAnswer = 10;
      const action = restartGame(correctAnswer);
      expect(action.type).toEqual(RESTART_GAME);
      expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
      const guess = 10;
      const action = makeGuess(guess);
      expect(action.type).toEqual(MAKE_GUESS);
      expect(action.guess).toEqual(guess);
  });
});

describe('displayInfo', () => {
  it('Should return the action', () => {
      const flag = true;
      const action = displayInfo(flag);
      expect(action.type).toEqual(DISPLAY_INFO);
      expect(action.showInfo).toEqual(flag);
  });
});