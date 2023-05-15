import {useState} from 'react';

export default function SearchBar(props) {
  const [valorBuscado, setValorBuscado] = useState('');

  const buscar = () => {
    // eslint-disable-next-line react/prop-types
    props.onSearch(valorBuscado);
    setValorBuscado('');
  };

  return (
    <div className="container mt-5">
      <input type="search" />
      <button onClick={buscar}>Agregar</button>
    </div>
  );
}
