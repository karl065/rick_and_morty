/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Styles from './Nav.module.css';

export default function Nav(props) {
  const onSearch = props.onSearch;

  return (
    <div className={Styles.container}>
      <Link className={Styles.boton} to="/home">
        Home
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link className={Styles.boton} to="/about">
        About
      </Link>
    </div>
  );
}
