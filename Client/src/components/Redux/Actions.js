const ADD_FAV = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';
const FILTER = 'FILTER';
const ORDER = 'ORDER';
const ORDERALL = 'ORDERALL';
const GET_FAV = 'GET_FAV';

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const getFav = () => {
  return {
    type: GET_FAV,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const orderAll = (orden) => {
  return {
    type: ORDERALL,
    payload: orden,
  };
};
