/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import {connect, useDispatch} from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import {filterCards, orderCards, getFav, orderAll} from '../Redux/Actions';
import {useEffect, useState} from 'react';

const Favorites = (props) => {
  const [aux, setAux] = useState(false);
  const [filterValue, setFilterValue] = useState('All');
  const [orderValue, setOrderValue] = useState('A');
  const [initialLoad, setInitialLoad] = useState(true);

  const myFavorites = props.myFavorites;

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    const selectValue = e.target.value;
    setOrderValue(selectValue);
    if (filterValue === 'All') {
      dispatch(orderAll(selectValue));
      setAux(selectValue === 'D');
    } else {
      dispatch(orderCards(selectValue));
      setAux(selectValue === 'D');
    }
  };

  const handleFilter = (e) => {
    const selectValue = e.target.value;
    setFilterValue(selectValue);
    if (filterValue === 'All') {
      dispatch(getFav());
      handleOrder({target: {value: orderValue}});
    } else {
      dispatch(filterCards(selectValue));
    }
  };

  useEffect(() => {
    handleFilter({target: {value: filterValue}});
    setInitialLoad(true);
  }, [filterValue]);

  useEffect(() => {
    if (initialLoad) {
      handleOrder({target: {value: orderValue}});
      setInitialLoad(false);
    }
  }, []);

  return (
    <div>
      <select
        className={styles.selects}
        onInput={handleOrder}
        value={aux ? 'D' : 'A'}
      >
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select
        className={styles.selects}
        onChange={handleFilter}
        defaultValue={filterValue}
      >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.filas}>
        {myFavorites
          ? myFavorites.map((personaje, index) => (
              <div key={index} className={styles.columnas}>
                {
                  <Card
                    id={personaje.id}
                    name={personaje.name}
                    status={personaje.status}
                    species={personaje.species}
                    gender={personaje.gender}
                    origin={personaje.origin.name}
                    image={personaje.image}
                    onClose={props.onClose}
                  />
                }
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
