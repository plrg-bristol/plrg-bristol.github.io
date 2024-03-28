import React from "react";
import { HOME_PAGE_KEY } from "../utils.js";
import PageComponent from "../components/generics/pageComponent";
import ImageComponent from "../components/generics/imageComponent";
import ListComponent from "../components/generics/listComponent";
import ResearchComponent from "../components/generics/researchComponent";

import Button from "../components/generics/buttonComponent";
import { LOGO_SRC, CONTACT_EMAIL } from "./variables";
import { createNews } from "./news";
import { createPeople } from "./people";
import { createTeaching } from "./teaching";
import { createLocation } from "./location";
import { createTalks } from "./talks";

import HorizontalComponent from "../components/generics/horizontalComponent.js";

const PAGES = {
  [HOME_PAGE_KEY]: (
    <PageComponent
      title="Programming Languages @ Bristol"
      titleCenter
      components={[
        <HorizontalComponent
          components={[
            <div className="text-center">
              <ImageComponent alt="logo" src={LOGO_SRC} maxHeight="380px" />,
            </div>,
            <div>
              <ListComponent
                alternatingColors={false}
                components={[
                  <div>
                    <p>
                      This is the website of the{" "}
                      <b>Programming Languages Research Group</b> at the{" "}
                      <a href="https://www.bristol.ac.uk/">
                        University of Bristol
                      </a>
                    </p>
                    <p>
                      Visit our{" "}
                      <a href="https://github.com/plrg-bristol">
                        GitHub<i className="ms-1 bi bi-github"></i>
                      </a>
                      ,{" "}
                      <a href="https://www.bristol.ac.uk/engineering/research/programming-languages/">
                        faculty page
                        <i className="ms-1 bi bi-box-arrow-up-right"></i>
                      </a>
                      ,{" "}
                      <a href="https://twitter.com/PLRG_bristol">
                        Twitter (@PLRG_bristol)
                        <i className="ms-1 bi bi-twitter"></i>
                      </a>
                      ,{" "}
                      <span className="text-nowrap">
                        or contact us at{" "}
                        <a href={`mailto: ${CONTACT_EMAIL}`}>
                          {CONTACT_EMAIL}
                          <i className="ms-1 bi bi-envelope-fill"></i>
                        </a>
                      </span>
                    </p>
                    <p className="mb-0">Our research interests include:</p>
                  </div>,
                  "&#8226; Functional programming",
                  "&#8226; Semantics of programming languages",
                  "&#8226; Verification",
                  "&#8226; Program analysis",
                  "&#8226; Program synthesis",
                  "&#8226; Type theory",
                  "&#8226; Software testing",
                  "&#8226; Security and cryptography",
                ]}
              />
            </div>,
          ]}
        />,

        <hr />,
        <h2 className="ms-3">News</h2>,
        ...createNews({ limit: 5 }),
        <div className="text-center">
          <Button size="md" className="text-center my-3" link="/news">
            See More News
          </Button>
        </div>,
        <hr />,
        ...createPeople({ isOnHomePage: true }),
        <div className="text-center">
          <Button size="md" className="text-center mb-3" link="/people">
            See More People
          </Button>
        </div>,
        <hr />,
        ...createLocation(),
      ]}
    />
  ),
  talks: <PageComponent title="Talks" components={createTalks()} />,
  teaching: <PageComponent title="Teaching" components={createTeaching()} />,
  news: <PageComponent title="News" components={createNews()} />,
  people: (
    <PageComponent
      title="People"
      components={createPeople({ isOnHomePage: false })}
    />
  ),
  publications: (
    <PageComponent
      title="Publications"
      components={[<ResearchComponent keywords="Programming Languages" />]}
    />
  ),
};

export default PAGES;
