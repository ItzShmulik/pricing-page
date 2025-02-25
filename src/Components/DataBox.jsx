function DataBox(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h2>${props.price}/MONTH</h2>
      <ul></ul>
      <button>START FREE</button>
    </div>
  );
}

export default DataBox;
