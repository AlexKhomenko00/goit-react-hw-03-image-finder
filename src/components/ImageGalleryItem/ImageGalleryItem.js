import React from "react";

const ImageGalleryItem = ({ url, onImgClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={onImgClick}
        src={url}
        alt="Something beautiful"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
