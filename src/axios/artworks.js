import axios from "axios";

export const getAllArtworks = async (config) => {
  const res = await axios.get(
    `https://api.artic.edu/api/v1/artworks?page=${config.page}&limit=${config.limit}`
  );
  return res.data.data;
};
export const searchArtworks = async ({ limit }, keyWord) => {
  const res = await axios.get(
    `https://api.artic.edu/api/v1/artworks/search?size=${limit}&q=${keyWord}`
  );
  const artworks = res.data.data;

  const artworksWithDetails = [];

  for (const artwork of artworks) {
    const res = await axios.get(
      `https://api.artic.edu/api/v1/artworks/${artwork.id}`
    );

    const artworkWithDetails = res.data.data;

    artworksWithDetails.push({
      id: artwork.id,
      title: artwork.title,
      image_id: artworkWithDetails.image_id,
      artist_title: artworkWithDetails.artist_title
    });
  }
  console.log(artworksWithDetails);
  return artworksWithDetails;
};
