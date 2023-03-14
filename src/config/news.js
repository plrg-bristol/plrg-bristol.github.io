import React from "react";

import VideoComponent from "../components/generics/videoComponent";
import ListComponent from "../components/generics/listComponent";
import HorizontalComponent from "../components/generics/horizontalComponent";
import ImageComponent from "../components/generics/imageComponent";


const news = [
  [
    "21 Feb 2022",
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <ImageComponent
          alt={"Sam (left) and Cristina (right) in front of Redmaids' High School"}
          src={"images/news/sam-cristina-redmaids.jpg"}
          maxHeight="315px"
        />
      </div>
      <p>
      Sam Frohlich and Cristina David went to Redmaids' High School to give an assembly and run a workshop about functional programming and fractals using CodeWorld.
      </p>
    </div>
  ],
  [
    "19 Jan 2022",
    "Minh Nguyen presented his PhD work to data scientists at The Alan Turing Institute."
  ],
  [
    "November 2022",
    "Cristina David has won funding for a 3 year PostDoc from the Royal Society. We will start recruiting soon."
  ],
  [
    "October 2022",
    "Steven Ramsay is one of the winners of the 2022 WhatsApp Privacy Aware Program Analysis for the proposal Scalable, static taint analysis for Core Erlang"
  ],
  [
    "October 2022",
    "Paper from the group accepted at POPL 2023"
  ],
  [
    "June 2022",
    "Two new research posts are open in the group. Please get in touch if you are interested.",
  ],
  [
    "May 2022",
    "Cristina David's Royal Society University Research Fellowship has been extended for another three years. Also, she received funding for a research assistant.",
  ],
  ["February 2022", "Paper accepted at PLDI."],
  [
    "January 2022",
    <div>
      <VideoComponent src="https://www.youtube.com/embed/Ov1HOMKn8t4" />
      <p>
        Roly Perera presented{" "}
        <a href="http://dynamicaspects.org/papers/popl22-final.pdf">
          Linked Visualisations via Galois Dependencies
        </a>{" "}
        (with Minh Nguyen, Tomas Petricek and Meng Wang) at POPL 2022.
      </p>
    </div>,
  ],
  [
    "January 2022",
    <div>
      <VideoComponent src="https://www.youtube.com/embed/LGaTnxYcdm4" />
      <p>
        Sam Frohlich presented{" "}
        <a href="https://arxiv.org/pdf/2111.12420.pdf">
          CircuitFlow - A Domain Specific Language for Dataflow Programming
        </a>{" "}
        (with Riley Evans and Meng Wang) at PADL 2022.
      </p>
    </div>,
  ],
  [
    "January 2022",
    <div>
      <VideoComponent src="https://www.youtube.com/embed/SUZ-eqprNg0" />
      <p>
        {" "}
        NingNing Xie presented{" "}
        <a href="https://xnning.github.io/papers/staging-with-class.pdf">
          Staging with Class
        </a>{" "}
        (with Matthew Pickering, Andres Loh, Nicolas Wu, Jeremy Yallop, and Meng
        Wang) at POPL 2022.
      </p>
    </div>,
  ],
  [
    "November 2021",
    <div>
      <VideoComponent src="https://www.youtube.com/embed/z8uPHKOTx6s" />
      <p>
        Sam Frohlich is giving a series of lectures on embedded domain specific
        languages! Here's a lecture premier.
      </p>
    </div>,
  ],
  [
    "November 2021",
    <>
      Cristina David will serve on the{" "}
      <a href="https://conf.researchr.org/home/icse-2023">ICSE 2023</a> program
      committee. She's currently serving on the{" "}
      <a href="https://etaps.org/2022/esop">ESOP 2022</a> program committee.
    </>,
  ],
  ["September 2021", "Two papers from the group accepted at POPL 2022."],
  [
    "September 2021",
    <>
      Alex Kavvos has won the Distinguished Paper Award at{" "}
      <a href="https://icfp21.sigplan.org/">ICFP 2021</a> for the paper{" "}
      <a href="https://dl.acm.org/doi/10.1145/3473567">
        Client-Server Sessions in Linear Logic
      </a>{" "}
      (with Zesen Qian and <a href="https://cs.au.dk/~birke/">Lars Birkedal</a>
      ).
    </>,
  ],
  [
    "August 2021",
    <>
      <a href="https://min-nguyen.github.io/">Minh Nguyen</a> won the first
      place at the ACM Student Research Competition (ICFP) with Composable,
      Modular Probabilistic Models. Congratulations Minh!
    </>,
  ],
  [
    "July 2021",
    <>
      Alex Kavvos serves in the{""}
      <a href="https://popl22.sigplan.org/">POPL 2022</a>
      program committee.
    </>,
  ],
  ["June 2021", "Hanliang Zhang joins the group as a research assistant."],
  [
    "April 2021",
    <>
      Our PhD students are attending the{" "}
      <a href="https://staffwww.dcs.shef.ac.uk/people/G.Struth/mgs21.html">
        Midlands Graduate School
      </a>
      .
    </>,
  ],
  [
    "February 2021",
    <>
      We (PI Meng Wang; CoI Cristina David) have received funding from{" "}
      <a href="https://www.ncsc.gov.uk/">
        National Cyber Security Centre (NCSC)
      </a>{" "}
      to work on Verified Program Synthesis for Refactoring Rust Programs.
    </>,
  ],
  ["November 2020", "Webpage goes live!"],
];

export function createNews({ limit = null } = {}) {
  let finalNews = news;
  if (limit !== null) {
    finalNews = news.slice(0, limit);
  }

  // Make the dates bold:
  finalNews = finalNews.map((newsItem) => {
    newsItem[0] = <b>{newsItem[0]}</b>;
    return newsItem;
  });

  return [
    <ListComponent
      components={finalNews.map((sections) => (
        <HorizontalComponent
          components={sections}
          centerCols={[0]}
          colWidthOverrides={[2, 10]}
        />
      ))}
    />,
  ];
}