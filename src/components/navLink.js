import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../scss/nav.module.scss";

// url only setup for local paths
const NavLink = ({
  children,
  url = null,
  onClick = null,
  checkIfActive = true,
  ...restOfProps
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  let className = `nav-link no-styling`;

  // Decode the url from a string:
  // if (url) {
  //   url = new URL(url, CONFIG.SITE_URL);
  // }

  // If a url or does something, is a real link to something:
  if (url || onClick) {
    className += ` ${styles["real-link"]}`;
  } else {
    className += ` ${styles["fake-link"]}`;
  }

  if (checkIfActive && url && url.pathname && location.pathname === url) {
    className += " active";
  }

  const onClickEvent = () => {
    if (onClick) {
      onClick();
    }

    if (url) {
      navigate(url);
    }
  };

  return (
    // Placing 1 div around all nav-links (cannot take the div away from dropdowns)
    <div>
      <button
        type="button"
        className={className}
        onClick={onClickEvent}
        {...restOfProps}
      >
        {children}
      </button>
    </div>
  );
};
NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  checkIfActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavLink;
