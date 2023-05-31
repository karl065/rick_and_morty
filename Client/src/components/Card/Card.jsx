/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {Link, useLocation} from 'react-router-dom';
import styles from './Card.module.css';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import {addFav, removeFav} from '../Redux/Actions';

const Card = (props) => {
  const location = useLocation();

  const verX = !['/favorites'].includes(location.pathname);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  const myFavorites = props.allCharacters;

  useEffect(() => {
    setIsFav(myFavorites.some((fav) => fav.id === props.id));
  }, [props.getFav, props.id]);

  const handleClick = () => {
    props.onClose(props.id);
    props.removeFav(props.id);
  };
  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.botonTransparente} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.botonTransparente} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <img className={styles.imagenes} src={props.image} alt="image" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.textoPrimario}>● {props.name}</h2>
      </Link>
      <h3 className={styles.textoSecundario}>● ID: {props.id}</h3>
      <h3 className={styles.textoSecundario}>● Estado: {props.status}</h3>
      <h3 className={styles.textoTerciario}>● Especie: {props.species}</h3>
      <h3 className={styles.textoPrimario}>● Género: {props.gender}</h3>
      <h3 className={styles.textoSecundario}>
        ● Origen: {props.origin !== 'unknown' ? props.origin : 'sin registro '}
      </h3>
      {verX && (
        <button onClick={handleClick} className={styles.boton}>
          X
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
