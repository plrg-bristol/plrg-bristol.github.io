import React from "react";

import { FOOTER_LINKS, LOGO_ACRONYM_ONLY_TRANS_SRC } from "../config/variables";
import Image from "./images/image";

const logoHeight = "70px";
const spacing = "mx-1";

const Footer = () => {
  return (
    <div className="background-color-base-light pt-2  ">
      <div className="text-center w-100">
        <div className="row m-2 justify-content-around">
          <div className="col col-md">
            <a rel="noreferrer" target="_blank" href="/">
              <Image
                alt="Home"
                src={LOGO_ACRONYM_ONLY_TRANS_SRC}
                height={logoHeight}
                className={spacing}
                isLink
              />
            </a>
          </div>
          <div className="col-md-auto">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.bristol.ac.uk/"
            >
              <Image
                alt="University of Bristol Logo"
                src="images/UoB_RGB_24.svg"
                height={logoHeight}
                className={spacing}
                isLink
              />
            </a>
          </div>
          <div className="col col-md">
            <a rel="noreferrer" target="_blank" href="https://zulip.com/">
              <Image
                alt="Zulip logo"
                src="images/zulip-icon-circle.svg"
                height={logoHeight}
                className={spacing}
                isLink
              />
            </a>
          </div>
        </div>
        <p className="w-50 mx-auto mb-1">
          Our research is generously supported by{" "}
          <a rel="noreferrer" target="_blank" href="https://royalsociety.org/">
            The Royal Society
          </a>
          ,{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.ukri.org/councils/epsrc/"
          >
            EPSRC
          </a>
          ,{" "}
          <a rel="noreferrer" target="_blank" href="https://www.ncsc.gov.uk/">
            NCSC
          </a>
          , and various industry partners.
        </p>
        <div className="pb-1">
          {/* Using h5 to make icons bigger */}
          <h5>
            {FOOTER_LINKS.map((linkComp, index) => (
              <span key={index} className="mx-2">
                {linkComp}
              </span>
            ))}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
