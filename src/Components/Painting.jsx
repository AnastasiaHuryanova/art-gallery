const Painting = (x) => {
const paintings = Object.values(x)
paintings.map((y) => (console.log(y)))

  return <div>{paintings.map((y) => (<div>({y[0]}</div>))
  }</div>;
};

export default Painting;
