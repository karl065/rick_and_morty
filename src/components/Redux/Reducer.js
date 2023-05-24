const initialState = {
  myFavorites: [],
};

const favorites = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
      };
    case 'REMOVE_FAV':
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== actions.payload
        ),
      };
    default:
      return state;
  }
};
export default favorites;
