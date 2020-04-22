import * as ACTION_TYPES from '../actions/actions_types';

const MATCH_POINT = 10;
const initialState = {
    emptyGame: true,
    isGameOver: false,
    currentPlayer: 0,
    scores: [0,0],
    winner: 0,
};

const gameReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INIT_GAME: {
            return {
                ...initialState,
                emptyGame: false,
            }
        }
        case ACTION_TYPES.END_TURN: {
            const { isMatch } = action.payload;
            const newScores = [...state.scores]
            if (isMatch) {
                newScores[state.currentPlayer] += MATCH_POINT;
            }

            return {
                ...state,
                currentPlayer: 1 - state.currentPlayer,
                scores: newScores,
            }
        }
        case ACTION_TYPES.FINISH_GAME: {
            const winner = state.scores[0] > state.scores[1] ? 0 : 1;
            return {
                ...state,
                isGameOver: true,
                winner,
            };
        }  
        default:
            return state;

    }
}

export default gameReducer;