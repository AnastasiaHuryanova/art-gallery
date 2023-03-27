const Painting = (x) => {
  const paintings = Object.values(x);
  const paintingsToMap = paintings[0];

  return <div>{paintingsToMap?.map((y) => <h1>{y.title}</h1>)}</div>;
};

export default Painting;
