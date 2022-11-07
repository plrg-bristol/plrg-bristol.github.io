import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { animated } from "@react-spring/web";

import Spinner from "../spinner";
import { hexToFilter } from "./utils";

import styles from "../../scss/image.module.scss";

// NOTE: color filter will only be guaranteed to work if the image is black (i.e. #000000), may produce strange images otherwise
const Image = ({
  alt,
  src,
  isLink = false,
  useAnimated = false, // Will replace the outer component with its corresponding react spring animated component
  useLoader = true,
  growToContainer = false, // Wraps in a div that works like flex-grow-1 (but actually is a bit more complicated because images don't play nicely with this) Doesn't require any height or width setting
  height = null,
  width = null,
  pretty = false,
  colorFilterHex = null, // Hex code to create a filter color to overlay (to allow changing e.g. svg color)
  transitionFilter = false,
  onLoad = () => {},
  ...restOfProps
}) => {
  const [loaded, setLoaded] = useState(false);

  const [showSpinnerIfNotLoaded, setShowSpinnerIfNotLoaded] = useState(false);

  const imageRef = useRef();

  // Start showing spinner if not loaded within the first 300ms:
  useEffect(() => {
    const tim = setTimeout(() => setShowSpinnerIfNotLoaded(true), 300);
    return () => clearTimeout(tim);
  }, []);

  // De referencing (to allow editing and creating if doesn#t exist) style prop
  restOfProps.style = { ...(restOfProps.style ??= {}) };

  if (height) {
    restOfProps.style.height = height;
  }

  if (width) {
    restOfProps.style.width = width;
  }

  // Memoise the filter calc as not always identical, even with identical hex so good to memoise as much as possible:
  const colorFilterCss = useMemo(() => {
    if (colorFilterHex) {
      return hexToFilter(colorFilterHex);
    }
    return null;
  }, [colorFilterHex]);

  if (colorFilterCss) {
    restOfProps.style.filter = colorFilterCss;
  }

  // Providing default maximum to container:
  if (!restOfProps.style.maxWidth) {
    restOfProps.style.maxWidth = "100%";
  }
  if (!restOfProps.style.maxHeight) {
    restOfProps.style.maxHeight = "100%";
  }

  restOfProps.className = classnames(restOfProps.className, styles.image, {
    [styles.pretty]: pretty,
    [styles.transitionFilter]: transitionFilter,
    [styles.linkImage]: isLink,
  });

  // Use the animated versions of the components if required:
  const ImageComp = useAnimated ? animated.img : "img";
  const DivComp = useAnimated ? animated.div : "div";

  const image = (
    <ImageComp
      ref={imageRef}
      alt={alt}
      src={src}
      onLoad={() => {
        setLoaded(true);
        onLoad();
      }}
      {...restOfProps}
    />
  );

  if (!loaded && showSpinnerIfNotLoaded) {
    const loaderDivStyle = {};
    // Height takes priority but uses width as backup:
    if (height || width) loaderDivStyle.height = height || width;
    // Width takes priority but uses height as backup:
    if (height || width) loaderDivStyle.width = width || height;

    // Try to keep similar to after loaded by using height and width values (where available) to try and keep the space:
    return (
      <DivComp
        className="inline-block d-flex flex-column justify-content-center align-items-center flex-grow-1"
        style={loaderDivStyle}
      >
        <Spinner />
        {/* Need the image in here to know when it's loaded */}
        <div className="hidden">{image}</div>
      </DivComp>
    );
  }

  if (growToContainer) {
    // https://stackoverflow.com/questions/47395307/flex-grow-is-not-working-with-images
    // flex-1 and overflow: "hidden" work in the same way for images as flex-grow-1 usually works:
    // Also aligning vertically and horizontally as max width may be hit before max height or vice versa:
    // NOTE: overflow: "auto" also works and was original but causes an occassional scrollbar to be visible for tiny overflows
    return (
      <DivComp
        style={{ flex: 1, overflow: "hidden" }}
        className="d-flex align-items-center justify-content-center"
      >
        {image}
      </DivComp>
    );
  }

  return image;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  useLoader: PropTypes.bool,
  useAnimated: PropTypes.bool,
  growToContainer: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  pretty: PropTypes.bool,
  colorFilterHex: PropTypes.string,
  transitionFilter: PropTypes.bool,
  onLoad: PropTypes.func,
};

export default Image;
