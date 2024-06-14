export default function Hero(props) {
  return (
    <div className="hero">
      <img className="hero-image" src={props.url} />
      <h2>{props.name}</h2>
      <p>
        <strong>Alter ego:</strong> {props.alterego}
      </p>
      <p>
        <strong>Universe:</strong> {props.universe}
      </p>
      <p>
        <strong>Occupation:</strong> {props.occupation}
      </p>
      <p>
        <strong>Friends:</strong> {props.friends}
      </p>
      <p>
        <strong>Superpowers:</strong> {props.superpowers}
      </p>
      <p>{props.info}</p>
    </div>
  );
}
