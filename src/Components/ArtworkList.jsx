const ArtworkList = ({ artworks }) => {
  return (
    <div>
      {artworks?.map((artwork) => (
        <div key={artwork?.id}>
          <h2>{artwork?.title}</h2>
          <h3>{artwork?.artist_title}</h3>
          <h3>{artwork?.date_display}</h3>
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
