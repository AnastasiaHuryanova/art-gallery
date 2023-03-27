import Painting from "../Components/Painting";
import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [paintings, setPaintings] = useState();

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
        <Painting x={paintings} />
      </div>
    </div>
  );
};

export default Gallery;
