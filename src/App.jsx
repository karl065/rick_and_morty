import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.jsx';

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <div className="container mt-5">
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
