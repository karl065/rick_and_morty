/* eslint-disable no-prototype-builtins */
import {useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import About from './components/About/About';
import {Route, Routes} from 'react-router-dom';
import Deatil from './components/Detail/Detail';

function App() {
  const [characters, setCharacters] = useState([]);

  const filtrarCharacter = (id) => {
    let charactersFiltrados = characters.filter(
      (character) => id !== character.id
    );
    return charactersFiltrados;
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
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
    });
  };

  const onClose = (id) => {
    setCharacters(filtrarCharacter(id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Deatil />} />
      </Routes>
    </div>
  );
}

export default App;
