import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated, config } from "@react-spring/web";

const Slide = ({
  axis, // should be "x" or "y"
  reverse = false, // if reverse becomes bottom to top/right to left
  slidePercentage = 100, // Percentag of the scrren (uses vh/vw)
  children,
  ...restOfProps
}) => {
  // Defaults top to bottom/left to right so reverse needs negatives:
  const directionalPercentage = reverse
    ? slidePercentage
    : slidePercentage * -1;
  const springStyle = useSpring({
    from: {
      transform: `translate${axis.toUpperCase()}(${directionalPercentage}${
        axis === "x" ? "vw" : "vh"
      })`,
    },
    to: {
      transform: `translate${axis.toUpperCase()}(0%)`,
    },
    config: config.slow,
  });

  // Add the animation styles to any existing:
  restOfProps.style ??= {};
  restOfProps.style = { ...restOfProps.style, ...springStyle };

  return <animated.div {...restOfProps}>{children}</animated.div>;
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  axis: PropTypes.oneOf(["x", "y"]).isRequired,
  reverse: PropTypes.bool,
  slidePercentage: PropTypes.number,
};

export default Slide;
