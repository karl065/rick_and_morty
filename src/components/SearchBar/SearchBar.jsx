/* eslint-disable react/prop-types */
import {useState} from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    props.onSearch(id);
    setId('');
  };
  const handleClickRandom = () => {
    const random = Math.floor(Math.random() * 826) + 1;
    props.onSearch(random);
  };

  return (
    <div>
      <input
        className={styles.inputs}
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button onClick={handleClick} className={styles.boton}>
        Agregar
      </button>
      <button onClick={handleClickRandom} className={styles.boton}>
        Random
      </button>
    </div>
  );
}
