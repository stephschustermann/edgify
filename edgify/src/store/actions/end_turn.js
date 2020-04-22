import * as ACTION_TYPES from './actions_types'; 

const endTurn = (isMatch) => {
    return {
        type: ACTION_TYPES.END_TURN,
        payload: { isMatch },
    }
}

export default endTurn;
