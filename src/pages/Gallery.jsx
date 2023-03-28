import { useEffect, useState } from "react";
import PaintingList from "../Components/PaintingList";
import { getAllArtworks, searchArtworksByArtist } from "../axios/artworks";

const Gallery = () => {
  const [paintings, setPaintings] = useState([]);
  const [artist, setArtist] = useState("");

  useEffect(() => {
    const loadPaintings = async () => {
      const config = { limit: 10 };
      const fetchedArtworks = await getAllArtworks(config);
      setPaintings(fetchedArtworks);
    };
    loadPaintings();
  }, [])
  

  const loadPaintingsByArtist = async () => {
    const config = { limit: 10 };
    const fetchedArtworks = await searchArtworksByArtist(config, artist);
    setPaintings(fetchedArtworks);
  };

  const handleChange = (e) => {
    setArtist(e.target.value);
  };

  const handleClick = (e) => {
    loadPaintingsByArtist();
    e.preventDefault();
    setArtist("");
  };

  return (
    <div>
      <h1>gallery</h1>
      <input type="text" onChange={handleChange} value={artist} />
      {console.log(artist)}
      <button onClick={handleClick}>search</button>
      <div>
        <PaintingList paintings={paintings} />
      </div>
    </div>
  );
};

export default Gallery;
