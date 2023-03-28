const ArtworkList = ({ artworks }) => {
  return (
    <div>
      {artworks?.map((artwork) => (
        <div key={artwork?.id}>
          <h1>{artwork?.title}</h1>
          <h2>{artwork?.artist_title}</h2>
          <img
            style={{ height: 400 }}
            src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`}
          />
        </div>
      ))}
    </div>
  );
};

export default ArtworkList;
