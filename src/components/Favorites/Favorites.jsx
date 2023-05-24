/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import {connect} from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';

const Favorites = (props) => {
  const myFavorites = props.myFavorites;

  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
