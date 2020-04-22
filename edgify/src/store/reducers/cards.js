import * as ACTION_TYPES from '../actions/actions_types';

const initialState = {
    cards: [],
    current_cards: [],
    total_open: 0,
    cardsPerRow: 0,
};

const cardsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INIT_GAME: {
            return {
                ...initialState,
                cards: action.payload.cards,
                cardsPerRow: action.payload.cardsPerRow,
            };
        }
        case ACTION_TYPES.END_TURN: {
            // check if we got a match and clean the current cards
            // if there wasn't a match we want to let the users look at the cards for the long they want
            const { isMatch } = action.payload;
            
            if (isMatch)
                return { 
                    ...state,
                    current_cards: [],
                    total_open: state.total_open + 2,
                };
            
            return state;
        }
        case ACTION_TYPES.OPEN_CARD: {
            let current_cards = [...state.current_cards];
            const cards = [...state.cards];

            // Traying to open a third card, happens when the next player start to play
            // so need to close the other cards before
            // if there was a match this array is already empty from ACTION_TYPES.END_TURN
            if (current_cards.length === 2){
                const index1 = current_cards[0].index;
                const index2 = current_cards[1].index;
                cards[index1].isOpen = false;
                cards[index2].isOpen = false;
                current_cards = []
            }
            
            const { card_index } = action.payload;
            cards[card_index].isOpen = true;
            
            current_cards.push({ index: card_index, url: cards[card_index].url });
            
            return {
                ...state,
                cards,
                current_cards,
            }
        }          
        default:
            return state;

    }
}

export default cardsReducer;