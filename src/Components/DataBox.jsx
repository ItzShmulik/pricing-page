function DataBox(props) {
  return (
    <div className="plan-box">
      <h2>{props.title}</h2>
      <p className="plan-description">{props.description}</p>
      <h2>${props.price}/MONTH</h2>
      {props.perks}
      <button>START FREE</button>
    </div>
  );
}

export default DataBox;
