import React, { useState } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";

// NOTE: FITS CONTAINER
// Currently only tested to work with Youtube embeds.
const Video = ({ src, caption = null }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="d-flex justify-content-center my-2">
      {/* If container overflowing, make sure content is still centralised not
      hanging off the side: */}
      <div
        style={{
          width: "90%",
          "aspect-ratio": "16 / 9",
          maxWidth: "40em",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="h-100 w-100 d-flex flex-column justify-content-around align-items-center"
          style={{ position: "relative" }}
        >
          {loaded ? null : <Spinner />}
          <iframe
            className="h-100 w-100"
            // hidden={!loaded}
            src={src}
            onLoad={() => setLoaded(true)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {caption ? <p className="mt-2 mb-1">{caption}</p> : null}
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Video;
