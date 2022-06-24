
const SET_CATEGORY = 'SET_CATEGORY';
const SET_CARD = 'SET_CARD';
const LOAD_MORE_CARDS = 'LOAD_MORE_CARDS';



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

        // case  SET_CATEGORY:
            // let postMessage = state.newPostText;
            // return {
            //     ...state,
            //     posts: [...state.posts, { id: (state.posts.length + 1), message: postMessage, likeCounter: 0} ],
            //     newPostText:''
            // };
        case LOAD_MORE_CARDS:
            return {
                 ...state,
                 // newPostText: action.newText
            }

        case SET_CARD:
            return { ...state, 
                // newPostText: action.newText
            }

        case SET_CATEGORY:
            return { ...state, 
                // userInfo: action.userData
            }

        default: 
            return state;
    }
}


// export let addPost= () => ({ type: ADD_POST, });
// export let updateNewText = (text) => ({ type: UPDATE_NEW_TEXT, newText: text });
export let setCategory = (category) => ({ type: SET_CATEGORY, category });
export let setCard = (cardID) => ({ type: SET_CARD, cardID });
export let loadMoreCards = () => ({ type: LOAD_MORE_CARDS });
 




export default appReducer;