import { useEffect, useState } from "react";
import axios from "axios";
import PaintingList from "../Components/PaintingList";
import { getAllArtworks, searchArtworksByArtist } from "../axios/artworks";

const Gallery = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const loadPaintings = async () => {
      const config = { limit: 10 };
      const fetchedArtworks = await searchArtworksByArtist(config, 'monet');
      setPaintings(fetchedArtworks);
    };
    loadPaintings();
  }, []);

  return (
    <div>
      <h1>gallery</h1>
      <button>search</button>
      <div>
        <PaintingList paintings={paintings} />
      </div>
    </div>
  );
};

export default Gallery;
