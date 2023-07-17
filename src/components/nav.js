import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";

import { HOME_PAGE_KEY } from "../utils.js";
import Image from "./images/image";
import NavLink from "./navLink";

import PAGES from "../config/pages";
import { LOGO_ACRONYM_ONLY_SRC } from "../config/variables";

import styles from "../scss/nav.module.scss";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar expand="md" className={styles["site-header"]}>
      <div className="container-fluid">
        {/* Using this method as it allows the home url link to be inside of the Nav component, this helps with active classes etc */}
        <Navbar.Brand
          aria-label="Home"
          as={Nav.Link}
          className={`mx-2 my-1 ${styles["real-link"]}`}
          onClick={() => {
            // If already on the home page, actually refresh the page:
            if (location.pathname === "/") {
              window.location.reload();
            } else {
              // Otherwise normal link to home:
              document.getElementById("hidden-home-link").click();
            }
          }}
        >
          <Image
            alt="Home"
            className={styles["image-link"]}
            src={LOGO_ACRONYM_ONLY_SRC}
            height="60px"
            pretty
            style={{ padding: 0, margin: 0 }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="site-navbar-toggle"
        >
          <div className={styles.holder}>
            <div className={styles.hamburger}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.cross}>
              <span />
              <span />
            </div>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.smallScreenCollapseSection}
        >
          <Nav className="flex-grow-1 justify-content-between">
            <div className="navbar-nav">
              <button
                type="button"
                id="hidden-home-link"
                className="hidden"
                onClick={() => navigate("/")}
              >
                Home Link
              </button>
            </div>

            <div className="navbar-nav" id={styles["pulled-right-navbar"]}>
              {Object.keys(PAGES).map((pageId) => {
                // Ignore if it's the home page:
                if (pageId !== HOME_PAGE_KEY) {
                  return (
                    <NavLink
                      onClick={() => navigate(`/${pageId}`)}
                      key={pageId}
                    >
                      {PAGES[pageId].props.title}
                    </NavLink>
                  );
                }
                return null;
              })}
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
