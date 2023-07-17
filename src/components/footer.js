import React from "react";

import { FOOTER_LINKS, FOOTER_LOGOS } from "../config/variables";
import Image from "./images/image";

const Footer = () => {
  return (
    <div className="background-color-base-light pt-2  ">
      <div className="text-center w-100">
        <div className="row m-2 justify-content-around">
          {FOOTER_LOGOS.map((link, index) => (
            <div key={index} className="col-4 col-md">
              {!!link ? (
                <a rel="noreferrer" target="_blank" href={link.link}>
                  <Image
                    alt={link.alt}
                    src={link.src}
                    height="90px"
                    className="mx-1"
                    isLink
                  />
                </a>
              ) : null}
            </div>
          ))}
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
