/* eslint-disable react/prop-types */
import {useState} from 'react';
import styles from './Form.module.css';
import {validationForm} from '../Validation/Validation';

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsArray = Object.values(error);
    if (errorsArray.length === 0) {
      login(userData);
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
        </div>
      </form>
    </div>
  );
};

export default Form;
