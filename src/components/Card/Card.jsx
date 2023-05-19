/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
  const handleClick = () => {
    props.onClose(props.id);
  };
  return (
    <div className={styles.card}>
      <img className={styles.imagenes} src={props.image} alt="image" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.textoPrimario}>● {props.name}</h2>
      </Link>
      <h3 className={styles.textoSecundario}>● Estado: {props.status}</h3>
      <h3 className={styles.textoTerciario}>● Especie: {props.species}</h3>
      <h3 className={styles.textoPrimario}>● Género: {props.gender}</h3>
      <h3 className={styles.textoSecundario}>
        ● Origen: {props.origin !== 'unknown' ? props.origin : 'sin registro '}
      </h3>
      <button onClick={handleClick} className={styles.boton}>
        X
      </button>
    </div>
  );
}
