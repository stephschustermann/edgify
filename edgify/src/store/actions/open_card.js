import * as ACTION_TYPES from './actions_types';

const openCard = (card_index) => {
    return {
        type: ACTION_TYPES.OPEN_CARD,
        payload : { card_index },
    }
}

export default openCard;
