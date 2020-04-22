import * as ACTION_TYPES from './actions_types';

const ROW = 5;
const COL = 6;
const TOTAL_CARDS = COL * ROW;
const PICTURE_URL_PREFIX = 'https://www.memozor.com/jeux/jquery/objects_diy/image'; //https://www.memozor.com/jeux/jquery/objects_diy/image20.jpg
const PICTURE_URL_SUFIX = '.jpg'

const createPictureArray = () => {
    const arr = [];
    for(let i = 0; i < TOTAL_CARDS/2; i++){
        for (let d = 0; d < 2; d++){ // push a pair of the same picture
            arr.push(PICTURE_URL_PREFIX + i + PICTURE_URL_SUFIX); // TODO fix this to string format style
        }
    }
    return arr;
}

const shuffleCards = () => {
    const picArr = createPictureArray();
    const cards = [];
    for(let i = 0; i < TOTAL_CARDS; i++){
        let random_index = Math.floor(Math.random()*(picArr.length));
        const card = {
            url: picArr[random_index],
            isOpen: false,
        }
        cards.push(card);
        picArr.splice(random_index, 1);
    }
    return cards;
};

const init_game = () => {
    const cards = shuffleCards();
    return {
        type: ACTION_TYPES.INIT_GAME,
        payload: {
            cards,
            cardsPerRow: COL,
        }
    }
}

export default init_game;
