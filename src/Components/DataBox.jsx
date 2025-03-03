function DataBox(props) {
  return (
    <div className="plan-box">
      <h2>{props.title}</h2>
      <p className="plan-description">{props.description}</p>
      <h2 className="plan-pricing-details">
        <span className="plan-currency">$</span>
        <span className="plan-price">{props.price}</span>/ MONTH
      </h2>
      {props.perks}
      <button className="start-free-button">START FREE</button>
    </div>
  );
}

export default DataBox;
