import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
    cards: [],
    current_cards: [],
    total_open: 0
};

const cardsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INIT_GAME: {
            return {
                ...initialState,
                cards: action.payload.cards, // get shuffled cards 
            };
        }
        case ACTION_TYPES.END_TURN: {
            const { isMatch } = action.payload;
            
            if (isMatch)
                return { 
                    ...state,
                    current_cards: [],
                };

            const card_index1 = state.current_cards[0]
            const card_index2 = state.current_cards[1]
            
            const cards = [...state.cards];            
            
            cards[card_index1].isOpen = false;
            cards[card_index2].isOpen = false;
            
            return {
                ...state,
                current_cards: [],
                cards,
            }
        }
        case ACTION_TYPES.OPEN_CARD: {
            if (state.current_cards.length === 2)
                return state;
            
            const { card_index } = action.payload;
            const cards = [...state.cards];
            cards[card_index].isOpen = true;
            
            const current_cards = [...state.current_cards];
            current_cards.push(card_index);
            
            return {
                ...state,
                cards,
                current_cards,
            }
        }        
        case ACTION_TYPES.IS_MATCH: {
            return {
                ...state,
                total_open: state.total_open + 2,
            }
        }    
        default:
            return state;

    }
}

export default cardsReducer;