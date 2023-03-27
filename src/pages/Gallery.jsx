import { useEffect, useState } from "react";
import axios from "axios";
import PaintingList from "../Components/PaintingList";

const Gallery = () => {
  const [paintings, setPaintings] = useState([]);

  const getPaintings = () => {
    axios.get("https://api.artic.edu/api/v1/artworks").then(res => (setPaintings(res.data.data))
    );
  };
  useEffect(() => {
    getPaintings();
  }, []);

  return (
    <div>
      <h1>gallery</h1>
      <div>
        <PaintingList paintings={paintings} />
      </div>
    </div>
  );
};

export default Gallery;
