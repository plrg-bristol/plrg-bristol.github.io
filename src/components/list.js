import React from "react";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import classnames from "classnames";
import ListGroup from "react-bootstrap/ListGroup";

import AnimatedChildren from "../animations/animatedChildren";
import { useComponentSeen } from "../utils";
import styles from "../scss/list.module.scss";

export const List = ({ children, animate = true, ...restOfProps }) => {
  const { ref, entered } = useComponentSeen();

  const childrenComp = animate ? (
    <AnimatedChildren open={entered}>{children}</AnimatedChildren>
  ) : (
    children
  );

  return (
    <div {...restOfProps} ref={ref}>
      {/* Can't use ol without breaking compat rules */}
      <ListGroup as="div" className={styles.list}>
        {childrenComp}
      </ListGroup>
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  animate: PropTypes.bool,
  restOfProps: PropTypes.any,
};

export const ListItem = ({
  active = false,
  onClick = null,
  alternatingColors = true,
  children,
  ...restOfProps
}) => {
  // Add active prop if active:
  restOfProps.className = classnames(restOfProps.className, styles.listItem, {
    [styles.active]: active,
    [styles.alternatingColors]: alternatingColors,
  });

  const renderChildren = () => (
    <div className={`ms-2 me-auto ${styles.children}`}>{children}</div>
  );

  return (
    // Can't use "li" without breaking compatability rules
    <ListGroup.Item as={animated.div} {...restOfProps}>
      {onClick ? (
        <div className={styles.listButton}>
          <button
            type="button"
            onClick={onClick}
            className="w-100 h-100 no-styling"
          >
            {renderChildren()}
          </button>
        </div>
      ) : (
        renderChildren()
      )}
    </ListGroup.Item>
  );
};

ListItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  alternatingColors: PropTypes.bool,
  restOfProps: PropTypes.any,
};
