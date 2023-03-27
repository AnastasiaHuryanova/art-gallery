const PaintingList = ({ paintings }) => {
  console.log(paintings);

  return (
    <div>
      {paintings?.map((painting) => (
        <div key={painting?.id}>
          <h1>{painting?.title}</h1>
          <img style={{height: 400}}
            //src={`https://www.artic.edu/iiif/2/${painting.thumbnail.lqip}/full/843,/0/default.jpg`}
            src={painting?.thumbnail.lqip}
          />
        </div>
      ))}
    </div>
  );
};

export default PaintingList;
