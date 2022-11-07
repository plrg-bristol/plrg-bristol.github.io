import React from "react";
import PropTypes from "prop-types";
import BootstrapButton from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";

// Rest of params not explicitly mentioned here from: https://react-bootstrap.github.io/components/buttons/

const Button = ({
  children,
  size = "md",
  link = null,
  onClick = () => {},
  ...restOfProps
}) => {
  const navigate = useNavigate();

  let finalOnClick;
  if (link) {
    finalOnClick = () => {
      onClick();
      // If it's an interal link, redirect with react router:
      if (link.startsWith("/")) {
        navigate(link);
      } else {
        // Otherwise just redirect normally:
        window.location.href = link;
      }
    };
  } else {
    finalOnClick = onClick;
  }

  restOfProps.className = classnames(
    "background-color-base-dark",
    "color-text",
    restOfProps.className
  );

  return (
    <BootstrapButton size={size} onClick={finalOnClick} {...restOfProps}>
      {children}
    </BootstrapButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
