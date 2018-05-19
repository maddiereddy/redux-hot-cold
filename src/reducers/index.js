import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100) + 1,
    showInfo: false
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: action.correctAnswer,
            showInfo: false
        });
    } else if (action.type === actions.MAKE_GUESS) {
        let guess, feedback;

        guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            feedback = 'Please enter a valid number.';

            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, guess],
                showInfo: false
            });
        }
    
        const difference = Math.abs(guess - state.correctAnswer);
    
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

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, guess]
        });
    } else if (action.type === actions.DISPLAY_INFO) {
        return Object.assign({}, state, {
            showInfo: action.showInfo
        });
    }
    return state;
};

