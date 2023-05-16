/* eslint-disable react/prop-types */
import {useState} from 'react';
import styles from './Card.module.css';

export default function SearchBar(props) {
  const [valorBuscado, setValorBuscado] = useState('');

  const buscar = () => {
    props.onSearch(valorBuscado);
    setValorBuscado('');
  };

  const handleChange = (event) => {
    setValorBuscado(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.inputs}
        type="search"
        value={valorBuscado}
        onChange={handleChange}
      />
      <button onClick={buscar} className={styles.boton}>
        Agregar
      </button>
    </div>
  );
}
