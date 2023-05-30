/* eslint-disable no-case-declarations */
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const favorites = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_FAV':
      return {
        ...state,
        allCharacters: [...state.allCharacters, actions.payload],
      };
    case 'REMOVE_FAV':
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== actions.payload
        ),
      };
    case 'FILTER':
      const copiaState = {...state};
      const filteredCharacters = copiaState.allCharacters.filter((character) =>
        character.gender.includes(actions.payload)
      );

      copiaState.myFavorites = filteredCharacters;
      return copiaState;
    case 'ORDER':
      const copiaState2 = {...state};
      console.log(copiaState2);
      if (actions.payload === 'A') {
        copiaState2.allCharacters.sort((a, b) => a.id - b.id);
      } else if (actions.payload === 'D') {
        copiaState2.allCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: copiaState2.allCharacters,
      };
    default:
      return state;
  }
};
export default favorites;
