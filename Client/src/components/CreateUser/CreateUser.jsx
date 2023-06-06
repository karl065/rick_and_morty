/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {useState} from 'react';
import styles from './CreateUser.module.css';
import {validationForm} from '../Validation/Validation';
import {Link} from 'react-router-dom';
import axios from 'axios';

export const CreateUser = ({login}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsArray = Object.values(error);
    if (errorsArray.length === 0) {
      createUsers(userData);
      setUserData({
        email: '',
        password: '',
      });
      setError({});
    } else {
      window.alert('Los campos no deben estar vacíos');
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setError(
      validationForm({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  async function createUsers(userData) {
    const {email, password} = userData;
    const URL = 'http://localhost:3001/rickandmorty/createUsers';

    try {
      const {data} = await axios.post(
        URL + `?email=${email}&password=${password}`
      );
      if (data.message === 'Agregado') login(userData);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <div>
          <img
            src="https://res.cloudinary.com/dpjeltekx/image/upload/v1684522438/Ryck%20And%20Morty/icegif-519_dtybgo.gif"
            alt="Login"
            className={styles.imagen}
          />
        </div>
        <div>
          <label className={styles.textoPrimario}>Email</label>
          <input
            name="email"
            className={`${styles.inputs} ${error.email && styles.warning}`}
            type="text"
            placeholder="Escribe tu email"
            value={userData.email}
            onChange={handleChange}
          />
          <h3 className={styles.danger}>{error.email}</h3>
        </div>
        <div>
          <label className={styles.textoPrimario}>Password</label>
          <input
            name="password"
            className={`${styles.inputs} ${error.password && styles.warning}`}
            type="password"
            placeholder="Escribe tu password"
            value={userData.password}
            onChange={handleChange}
          />
          <h3 className={styles.danger}>{error.password}</h3>
          <button className={styles.boton}>Submit</button>
          <Link className={styles.boton} to={'/'}>
            back
          </Link>
        </div>
      </form>
    </div>
  );
};
