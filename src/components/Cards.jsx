import Card from './Card';

export default function Cards(props) {
  const personajes = props.characters;
  return (
    <div className="row">
      {personajes.map((personaje, index) => (
        <div key={index} className="col mb-4">
          {
            <Card
              id={personaje.id}
              name={personaje.name}
              status={personaje.status}
              species={personaje.species}
              gender={personaje.gender}
              origin={personaje.origin.name}
              image={personaje.image}
              onClose={() => window.alert('Emulamos que se cierra la card')}
            />
          }
        </div>
      ))}
    </div>
  );
}
