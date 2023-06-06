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

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.onSearch(id);
      setId('');
    }
  };

  const handleClickRandom = () => {
    let random = Math.floor(Math.random() * 826) + 1;
    let randomValue = random.toString();
    props.onSearch(randomValue);
  };

  return (
    <div>
      <input
        className={styles.inputs}
        type="search"
        value={id}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
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
