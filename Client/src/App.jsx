/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */
import {useEffect, useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import About from './components/About/About';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Deatil from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites.jsx';
import {CreateUser} from './components/CreateUser/CreateUser';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const verNav = !['/'].includes(location.pathname);

  const [access, setAccess] = useState(false);

  async function login(userData) {
    const {email, password} = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    try {
      const {data} = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const {access} = data;
      setAccess(data);
      access ? access && navigate('/home') : window.alert(data.message);
    } catch (error) {
      console.log(error.message);
    }
  }

  const [characters, setCharacters] = useState([]);

  const filtrarCharacter = (id) => {
    let charactersFiltrados = characters.filter(
      (character) => id !== character.id
    );
    return charactersFiltrados;
  };

  async function onSearch(id) {
    try {
      const {data} = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        const filtrar = filtrarCharacter(id);
        const existeCharacter = filtrar.some((character) => character.id == id);
        if (existeCharacter) {
          window.alert('¡El ID ya existe!');
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const onClose = (id) => {
    setCharacters(filtrarCharacter(id));
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className="App">
      {verNav && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/createuser" element={<CreateUser login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Deatil />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
