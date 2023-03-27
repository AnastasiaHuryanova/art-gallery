import { useEffect, useState } from "react";
import axios from "axios";
import PaintingList from "../Components/PaintingList";

const Gallery = () => {
  const [paintings, setPaintings] = useState([]);
  const [artist, setArtist] = useState('monet');

  const getPaintings = () => {
    axios
      .get(
        `https://api.artic.edu/api/v1/artworks/search?q=${artist}/page=1&limit=50`
      )
      .then((res) => setPaintings(res.data.data));
  };
  useEffect(() => {
    getPaintings();
  }, []);



  return (
    <div>
      <h1>gallery</h1>
      <input value={artist}></input>
      <button >search</button>
      <div>
        <PaintingList paintings={paintings} />
      </div>
    </div>
  );
};

export default Gallery;
