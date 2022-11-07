import React from "react";

export const NO_IMG_SRC = "images/no_img.png";
export const LOGO_SRC = "images/logo.jpg";
export const CONTACT_EMAIL = "pl-lab@bristol.ac.uk";
// Using nulls below to help with spacing:
export const FOOTER_LOGOS = [
  null,
  {
    src: "images/uni_logo.png",
    alt: "University of Bristol Logo",
    link: "https://www.bristol.ac.uk/",
  },
  {
    src: LOGO_SRC,
    alt: "Home",
    link: "/",
  },
  null,
];

// Unlike in the main pages, if you want these links to open on another tab, rather than redirect, you manually need to add the target="_blank" and rel="noreferrer" attributes to the link.
export const FOOTER_LINKS = [
  <a rel="noreferrer" target="_blank" href="https://github.com/bristolpl">
    <i className="bi bi-github"></i>
  </a>,
  <a
    rel="noreferrer"
    target="_blank"
    href="https://www.bristol.ac.uk/engineering/research/programming-languages/"
  >
    <i className="bi bi-box-arrow-up-right"></i>
  </a>,
  <a rel="noreferrer" target="_blank" href={`mailto: ${CONTACT_EMAIL}`}>
    <i className="ms-1 bi bi-envelope-fill"></i>
  </a>,
];
