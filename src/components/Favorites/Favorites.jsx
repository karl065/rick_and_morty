/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import {connect, useDispatch} from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import {filterCards, orderCards} from '../Redux/Actions';
import {useState} from 'react';

const Favorites = (props) => {
  const [aux, setAux] = useState(false);

  const myFavorites = props.myFavorites;

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select
        className={styles.selects}
        onChange={handleOrder}
        value={aux ? 'D' : 'A'}
      >
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select className={styles.selects} onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.filas}>
        {myFavorites.map((personaje, index) => (
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
        ))}
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
