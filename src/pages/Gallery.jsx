import { useEffect, useState } from "react";
import PaintingList from "../Components/ArtworkList";
import { getAllArtworks, searchArtworks } from "../axios/artworks";

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const loadPaintings = async () => {
      const config = { limit: 10 };
      const fetchedArtworks = await getAllArtworks(config);
      setArtworks(fetchedArtworks);
    };
    loadPaintings();
  }, [])
  

  const loadPaintingsByArtist = async () => {
    const config = { limit: 10 };
    const fetchedArtworks = await searchArtworks(config, keyword);
    setArtworks(fetchedArtworks);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = (e) => {
    loadPaintingsByArtist();
    e.preventDefault();
    setKeyword(keyword.toLowerCase())
    setKeyword("");
  };

  return (
    <div>
      <h1>gallery</h1>
      <input type="text" onChange={handleChange} value={keyword} />
      {console.log(keyword)}
      <button onClick={handleClick}>search</button>
      <div>
        <PaintingList artworks={artworks} />
      </div>
    </div>
  );
};

export default Gallery;
