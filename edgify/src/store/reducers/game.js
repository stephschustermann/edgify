import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
    isGameOver: false,
    currentPlayer: 0,
};

const gameReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INIT_GAME: {
            return initialState;
        }
        // case ACTION_TYPES.FINISH_GAME: {
        //     return {
        //         ...state,
        //         user_text: action.payload,
        //     }
        // }
        case ACTION_TYPES.START_TURN: {
            return {
                ...state,
                currentPlayer: action.payload.playerIndex,
            }
        }
        // case ACTION_TYPES.END_TURN: {
        //     return {
        //         ...state,
        //         user_text: action.payload,
        //     }
        // }    
        // case ACTION_TYPES.IS_MATCH: {
        //     return {
        //         ...state,
        //         user_text: action.payload,
        //     }
        // }    
        default:
            return state;

    }
}

export default gameReducer;