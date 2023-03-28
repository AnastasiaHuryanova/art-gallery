const PaintingList = ({ paintings }) => {
  return (
    <div>
      {paintings?.map((painting) => (
        <div key={painting?.id}>
          <h1>{painting?.title}</h1>
          <img
            style={{ height: 400 }}
            src={`https://www.artic.edu/iiif/2/${painting?.image_id}/full/843,/0/default.jpg`}
          />
        </div>
      ))}
    </div>
  );
};

export default PaintingList;
