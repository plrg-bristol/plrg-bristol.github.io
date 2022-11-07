import React from "react";
import PropTypes from "prop-types";

import Image from "../images/image";

const ImageComponent = ({ src, alt, maxHeight, caption = "", link = null }) => {
  const img = (
    <Image isLink={!!link} alt={alt} src={src} pretty style={{ maxHeight }} />
  );

  let comp = null;
  if (caption.length > 0) {
    comp = (
      <span>
        {img}
        <br />
        <div className="d-inline-block position-relative">
          <p className="position-relative mb-0">{caption}</p>
        </div>
      </span>
    );
  } else comp = img;

  if (link) {
    comp = (
      <a href={link} target="_blank" rel="noopener noreferrer ">
        {comp}
      </a>
    );
  }

  return comp;
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  maxHeight: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  link: PropTypes.string,
};

export default ImageComponent;
