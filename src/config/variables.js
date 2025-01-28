import React from "react";

export const NO_IMG_SRC = "images/no_img.png";
export const LOGO_SRC = "images/logo.jpg";
export const LOGO_ACRONYM_ONLY_SRC = "images/logo-acronym-only.png";
export const LOGO_ACRONYM_ONLY_TRANS_SRC = "images/logo-acronym-only-trans.png";
export const CONTACT_EMAIL = "pl-rg@bristol.ac.uk";
// Using nulls below to help with spacing:
export const FOOTER_LOGOS = [
  null,
  {
    src: "images/uni_logo.png",
    alt: "University of Bristol Logo",
    link: "https://www.bristol.ac.uk/",
  },
  {
    src: LOGO_ACRONYM_ONLY_TRANS_SRC,
    alt: "Home",
    link: "/",
  },
  {
    src: "images/zulip-icon-circle.svg",
    alt: "Zulip logo",
    link: "https://zulip.com/",
  },
  null,
];

// Unlike in the main pages, if you want these links to open on another tab, rather than redirect, you manually need to add the target="_blank" and rel="noreferrer" attributes to the link.
export const FOOTER_LINKS = [
  <a rel="noreferrer" target="_blank" href="https://github.com/plrg-bristol">
    <i className="bi bi-github"></i>
  </a>,
  <a rel="noreferrer" target="_blank" href="https://twitter.com/PLRG_bristol">
    <i className="bi bi-twitter"></i>
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
