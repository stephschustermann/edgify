import * as ACTION_TYPES from './action_types';

export const init_game = () => {
    return {
        type: ACTION_TYPES.INIT_GAME,
    }
}

export const finish_game = () => {
    return {
        type: ACTION_TYPES.FINISH_GAME,
    }
}