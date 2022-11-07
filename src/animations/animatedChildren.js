import React from "react";
import PropTypes from "prop-types";
import { useTrail } from "@react-spring/web";

// NOTE: all children must be animated e.g.: import { animated } from "@react-spring/web"; then animated.div/span/h4 etc
const AnimatedChildren = ({ open = true, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  return (
    <>
      {trail.map(({ x, ...rest }, index) => {
        // Copy in the original styling as well if exists:
        const originalStyle = items[index].props.style || {};

        // Clone the component with the animation styling, means all children must be animated.div/span/h4 etc
        return React.cloneElement(items[index], {
          style: {
            ...rest,
            transform: x.to((x) => `translate3d(0,${x}px,0)`),
            ...originalStyle,
          },
        });
      })}
    </>
  );
};
AnimatedChildren.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default AnimatedChildren;
