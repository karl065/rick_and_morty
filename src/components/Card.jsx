/* eslint-disable react/prop-types */
import styles from './Card.module.css';

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.boton}>
        X
      </button>
      <h2 className={styles.textoPrimario}>{name}</h2>
      <div className={styles.filas}>
        <h3 className={styles.textoSecundario}>Estado: {status}</h3>
        <h3 className={styles.textoTerciario}>Especie: {species}</h3>
        <h3 className={styles.textoPrimario}>Género: {gender}</h3>
        <h3 className={styles.textoSecundario}>
          Origen:
          {origin !== 'unknown' ? origin : 'sin registro '}
        </h3>
      </div>
      <img className={styles.imagenes} src={image} alt="image" />
    </div>
  );
}
