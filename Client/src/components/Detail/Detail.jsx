/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import styles from './Detail.module.css';

const Deatil = () => {
  const {id} = useParams();

  const [character, setCharacter] = useState({});

  const getFromId = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({data}) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
  };

  useEffect(() => {
    getFromId(id);
  }, [id]);

  return (
    <div className={styles.filas}>
      <div className={styles.card}>
        <h2 className={styles.textoNombre}>{character.name}</h2>
        <h3 className={styles.textoSecundario}>● Status: {character.status}</h3>
        <h3 className={styles.textoTerciario}>● Genero: {character.gender}</h3>
        <h3 className={styles.textoPrimario}>● Especie: {character.species}</h3>
        <h3 className={styles.textoSecundario}>
          ● Origen:
          {character.origin?.name !== 'unknown'
            ? character.origin?.name
            : 'sin registro '}
        </h3>
      </div>
      <div className={styles.card}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.imagenes}
        />
      </div>
    </div>
  );
};

export default Deatil;
