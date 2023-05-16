/* eslint-disable react/prop-types */
import Card from './Card';
import styles from './Card.module.css';

export default function Cards(props) {
  const personajes = props.characters;
  return (
    <div className={styles.filas}>
      {personajes.map((personaje, index) => (
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
              onClose={() => window.alert('Emulamos que se cierra la card')}
            />
          }
        </div>
      ))}
    </div>
  );
}
