/* eslint-disable no-case-declarations */
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const order = {};

const favorites = (state = initialState, actions) => {
  switch (actions.type) {
    case 'GET_FAV':
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
      };
    case 'REMOVE_FAV':
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
      };
    case 'FILTER':
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = state.allCharacters.filter((character) =>
        character.gender.includes(actions.payload)
      );

      order.allCharacters = [...filteredCharacters];
      return {
        ...state,
        myFavorites: filteredCharacters,
        allCharacters: allCharactersCopy,
      };
    case 'ORDER':
      const copiaState2 = JSON.parse(JSON.stringify(order));
      if (actions.payload === 'A') {
        copiaState2.allCharacters.sort((a, b) => a.id - b.id);
      } else if (actions.payload === 'D') {
        copiaState2.allCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: copiaState2.allCharacters,
      };
    case 'ORDERALL':
      const copiaState3 = {...state};
      if (actions.payload === 'A') {
        copiaState3.allCharacters.sort((a, b) => a.id - b.id);
      } else if (actions.payload === 'D') {
        copiaState3.allCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: copiaState3.allCharacters,
        allCharacters: copiaState3.allCharacters,
      };

    default:
      return state;
  }
};
export default favorites;
