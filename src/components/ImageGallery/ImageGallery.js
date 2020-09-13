import React from "react";

import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ photos, onImgClick }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          onImgClick={() => onImgClick(largeImageURL)}
          key={id}
          url={webformatURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
