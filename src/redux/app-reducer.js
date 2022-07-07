
const SET_CATEGORY = 'SET_CATEGORY';
const TOGGLE_SELECT_CARD = 'TOGGLE_SELECT_CARD';
const LOAD_MORE_CARDS = 'LOAD_MORE_CARDS';
const DELETE_CARDS = 'DELETE_CARDS';



let initialState =  {
    categories: [
        { id: 0, category: 'Show All', },
        { id: 1, category: 'Branding',   },
        { id: 2, category: 'Illustration', },
        { id: 3, category: 'Motion', },
        { id: 4, category: 'Design',  },
    ],
    selectedCategoryId: 'Show All',
    cards: [
            { id: 0, category: 'Design', cardName: 'SOFA', imgId: 0, isSelected: true },
            { id: 1, category: 'Branding', cardName: 'KeyBoard', imgId: 1, isSelected: false },
            { id: 2, category: 'Illustration', cardName: 'Work Media', imgId: 2, isSelected: false },
            { id: 3, category: 'Motion', cardName: 'DDDone', imgId: 3, isSelected: false },
            { id: 4, category: 'Design', cardName: 'Abstract', imgId: 4, isSelected: false },
            { id: 5, category: 'Branding', cardName: 'HandP', imgId: 5, isSelected: false },
            { id: 6, category: 'Motion', cardName: 'Architect', imgId: 6, isSelected: false },
            { id: 7, category: 'Design', cardName: 'CalC', imgId: 7, isSelected: false },
            { id: 8, category: 'Branding', cardName: 'Sport', imgId: 8,  isSelected: false},
    ],

};


const appReducer = (state = initialState, action) => {
     switch (action.type) {

        case LOAD_MORE_CARDS:
            let startId = state.cards.length > 0 
            ? state.cards[state.cards.length-1].id + 1
            : 0;

            let newCards = [
                 { id: 0, category: 'Design', cardName: 'SOFA', imgId: 0, isSelected: true },
                 { id: 1, category: 'Branding', cardName: 'KeyBoard', imgId: 1, isSelected: false },
                 { id: 2, category: 'Illustration', cardName: 'Work Media', imgId: 2, isSelected: false },
                 { id: 3, category: 'Motion', cardName: 'DDDone', imgId: 3, isSelected: false },
                 { id: 4, category: 'Design', cardName: 'Abstract', imgId: 4, isSelected: false },
                 { id: 5, category: 'Branding', cardName: 'HandP', imgId: 5, isSelected: false },
                 { id: 6, category: 'Motion', cardName: 'Architect', imgId: 6, isSelected: false },
                 { id: 7, category: 'Design', cardName: 'CalC', imgId: 7, isSelected: false },
                 { id: 8, category: 'Branding', cardName: 'Sport', imgId: 8, isSelected: false },
            ].map(c => { return ({ ...c, id: startId++, isSelected: false, cardName: c.cardName + startId }   )})

            return {
                 ...state,
                cards: [...state.cards, ...newCards]
            }

        case TOGGLE_SELECT_CARD:
            return { 
                ...state, 
                cards: state.cards.map(c => {
                    if (c.id === action.cardID) { return ({ ...c, isSelected: !c.isSelected }) } else return (c);
                })
            }
        case DELETE_CARDS:
             return { 
                ...state, 
                 cards: [...state.cards.filter(c => !c.isSelected)]
            }
            

        case SET_CATEGORY:
            return { ...state, 
                selectedCategoryId: action.category
            }

        default: 
            return state;
    }
}



export let setCategory = (category) => ({ type: SET_CATEGORY, category });
export let loadMoreCards = () => ({ type: LOAD_MORE_CARDS });
export let deleteCards = () => ({ type: DELETE_CARDS });
export let toggleSelectCard = (cardID) => ({ type: TOGGLE_SELECT_CARD, cardID });
 


export default appReducer;