export default function Card(props) {
  return (
    <div className="card">
      <button onClick={props.onClose} className="btn btn-danger">
        X
      </button>
      <h2>{props.name}</h2>
      <h2 className="h2 display-6">{props.status}</h2>
      <h2 className="h2 display-6">{props.species}</h2>
      <h2 className="h2 display-6">{props.gender}</h2>
      <h2 className="h2 small">{props.origin}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}
