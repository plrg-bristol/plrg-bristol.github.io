import React from "react";

import VideoComponent from "../components/generics/videoComponent";
import ListComponent from "../components/generics/listComponent";
import HorizontalComponent from "../components/generics/horizontalComponent";
import ImageComponent from "../components/generics/imageComponent";

const news = [
  [
    "February 2025",
    <div>
      We are recruiting a Senior Research Associate in Programming Languages.{" "}
      <a
        href="https://www.bristol.ac.uk/jobs/find/details/?jobId=372879"
        target="_blank"
        rel="noreferrer"
      >
        Click here to find more details and apply.
      </a>{" "}
      Deadline: 26th March.
    </div>,
  ],
  [
    "February 2025",
    "Eddie Jones will serve on the POPL 2026 program committee.",
  ],
  [
    "January 2025",
    "Joseph Bond, Cristina David, Minh Nguyen, Dominic Orchard, Roly Perera, 'Conjugate operators for transparent, explorable research outputs', accepted at ESOP'25",
  ],
  [
    "January 2025",
    "Henrijs Princis, Cristina David, Alan Mycroft, 'Enhancing SQL Query Generation with Neurosymbolic Reasoning', accepted at AAAI'25",
  ],
  [
    "January 2025",
    "Yoav Alon, Cristina David, 'Integrating Large Language Models and Reinforcement Learning for Non-Linear Reasoning', accepted at FSE'25",
  ],
  ["January 2025", "Cristina David will be on the committee of CAV'25"],
  [
    "October 2024",
    <div>
      Alex won an ARIA grant to study{" "}
      <a
        href="https://www.aria.org.uk/safeguarded-ai-creators/"
        target="_blank"
        rel="noreferrer"
      >
        Safeguarded AI
      </a>{" "}
      for his project "Two-dimensional Kripke Semantics and World Models".
    </div>,
  ],
  [
    "October 2024",
    <div>
      Alex is serving on the{" "}
      <a
        href="https://2025.splashcon.org/track/OOPSLA"
        target="_blank"
        rel="noreferrer"
      >
        OOPSLA 2025
      </a>{" "}
      committee.
    </div>,
  ],
  [
    "September 2024",
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ImageComponent
          alt={"Meng receiving distinguished paper award at ECOOP 2024."}
          src={"images/news/meng-ECOOP.jpg"}
          maxHeight="315px"
        />
      </div>
      <p>
        Meng received a distinguished paper award at ECOOP'24 for his paper{" "}
        <a
          href="https://doi.org/10.4230/LIPIcs.ECOOP.2024.39"
          target="_blank"
          rel="noreferrer"
        >
          Formalizing, Mechanizing, and Verifying Class-Based Refinement Types
        </a>{" "}
        in collaboration with Ke Sun, Di Wang, Sheng Chen, and Dan Hao.
      </p>
    </div>,
  ],
  [
    "September 2024",
    <div>
      Many of us went to ICFP'24 in Milan: Sam gave a talk at PLWM; Hanliang
      gave a talk at ICFP; Jess was part of the AV team and took the lead on
      filming the FARM performance.
    </div>,
  ],
  [
    "13-15 August 2024",
    <div>
      The group hosted the{" "}
      <a href="https://wp.doc.ic.ac.uk/vss24/" target="_blank" rel="noreferrer">
        2024 VeTSS Summer School
      </a>
      , which we're happy to say was a great success! A special thank you to
      Teresa and Azalea from Imperial, Ling and Brijesh from Surrey, and Ell
      from the CS school office for all their hard work.{/* </p> */}
    </div>,
  ],
  [
    "June 2022",
    <div>
      <VideoComponent src="https://www.youtube.com/embed/GcN9YTYQDsA?si=vkMPo9_4s0gP8fhn" />
      <p>
        Alex gave a talk on Two-Dimensional Kripke Semantics at{" "}
        <a href="https://oxford24.github.io/">MFPS 2024</a> in Oxford.
      </p>
    </div>,
  ],
  [
    "May 2024",
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ImageComponent
          alt={
            "Sam and Jess posing in front of a poster advertising their talks at Peking University."
          }
          src={"images/news/sam-jess-peking-visit.jpg"}
          maxHeight="315px"
        />
      </div>
      <p>
        Sam and Jess visited the{" "}
        <a href="https://pl.cs.pku.edu.cn/en/" target="_blank" rel="noreferrer">
          Programming Languages Lab at Peking University
        </a>{" "}
        and had a fantastic time. Thank you Professor Hu and all the members of
        the lab for your wonderful hospitality!
      </p>
    </div>,
  ],
  [
    "March 2024",
    <div>
      Cristina is recruiting a PostDoc in programming languages. Apply{" "}
      <a
        href="https://www.bristol.ac.uk/jobs/find/details/?jobId=337277"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>{" "}
      (deadline: 18th March)
    </div>,
  ],
  [
    "March 2024",
    <div>
      <a
        href="https://xingzhang-pku.github.io/"
        target="_blank"
        rel="noreferrer"
      >
        Xing Zhang
      </a>{" "}
      from Peking University is visiting us for 5 months. Welcome Xing!
    </div>,
  ],
  [
    "February 2024",
    <div>
      Jess traveled to Southampton to give a talk on Haskell game development to
      the student PL society.
    </div>,
  ],
  [
    "January 2024",
    <div>
      Alex Kavvos will be giving an invited talk at the ({" "}
      <a href="https://bctcs2024.github.io/" target="_blank" rel="noreferrer">
        British Colloquium for Theoretical Computer Science
      </a>{" "}
      ) in April, in Bath.
    </div>,
  ],
  [
    "January 2024",
    <div>
      We all had a great time at POPL'24, with many members of the group giving
      excellent talks!
    </div>,
  ],
  [
    "November 2023",
    <div>
      Paper ({" "}
      <a
        href="https://popl24.sigplan.org/details/POPL-2024-popl-research-papers/69/Ill-Typed-Programs-Don-t-Evaluate"
        target="_blank"
        rel="noreferrer"
      >
        Ill-Typed Programs Don't Evaluate
      </a>{" "}
      ) from the group accepted at POPL24.
    </div>,
  ],
  [
    "4-9 September 2023",
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ImageComponent
          alt={
            "A collage of Sam and Minh giving talks at ICFP and enjoying Seattle!"
          }
          src={"images/news/ICFP-collage.png"}
          maxHeight="315px"
        />
      </div>
      <p>
        Greetings from Seattle, where we had a successful ICFP'23!
        <ul>
          <li>
            Sam and Harry Goldstein presented their "Reflecting on Random
            Generation" distinguished paper (
            <a
              href="https://www.youtube.com/watch?v=ZQ_U-LANbc4&t=1312s"
              target="_blank"
              rel="noreferrer"
            >
              watch on YouTube
            </a>
            )
          </li>
          <li>
            Sam also presented "Embedding by Unembedding" (
            <a
              href="https://www.youtube.com/live/ZQ_U-LANbc4?si=q0xS9exCb8c1TbeV&t=12028"
              target="_blank"
              rel="noreferrer"
            >
              watch on YouTube
            </a>
            )
          </li>
          <li>
            Minh presented "Effect Handlers for Programmable Inference" at
            Haskell Symposium (
            <a
              href="https://www.youtube.com/live/c6QAjzunnf8?si=j2alAErgrJz_m-Pt&t=11026"
              target="_blank"
              rel="noreferrer"
            >
              watch on YouTube
            </a>
            )
          </li>
        </ul>
      </p>
    </div>,
  ],
  [
    "August 2023",
    "Paper from the group (Reflecting on Random Generation) received a Distinguished Paper award at ICFP'23!",
  ],
  [
    "July 2023",
    "Alex Kavvos has won EPSRC funding to work on Language Embeddings for Proof Engineering. This project will be completed in collaboration with the University of Maryland, College Park.",
  ],
  [
    "July 2023",
    "<b>Contract Lenses: Reasoning about Bidirectional Programs via Calculation</b> was accepted to Journal of Functional Programming.",
  ],
  [
    "July 2023",
    "<b>Effect Handlers for Programmable Inference</b> accepted to Haskell Symposium 2023.",
  ],
  [
    "July 2023",
    <div>
      We now have a twitter! Give us a follow:{" "}
      <a
        href="https://twitter.com/PLRG_bristol"
        target="_blank"
        rel="noreferrer"
      >
        @PLRG_bristol
      </a>
    </div>,
  ],
  [
    "June-July 2023",
    <div>
      We are{" "}
      <a
        href="https://www.bristol.ac.uk/jobs/find/details/?jobId=316176&jobTitle=Lecturer%20in%20Programming%20Languages%20and%20Compilers"
        target="_blank"
        rel="noreferrer"
      >
        recruiting a lecturer in programming languages
      </a>
      . Please get in touch with Meng Wang (meng.wang@bristol.ac.uk) with
      enquires.
    </div>,
  ],
  [
    "June 2023",
    "Minh Nguyen was awarded a EPSRC Doctoral Prize Fellowship for the proposal Robust, Reusable Computational Models via Typed Functional Programming.",
  ],
  ["June 2023", "Steven Ramsay will serve on the POPL 2024 program committee."],
  [
    "May 2023",
    "<b>Embedding by Unembedding</b> and <b>Reflecting on Random Generation</b> accepted to ICFP 2023.",
  ],
  [
    "April 2023",
    "<b>Ownership guided C to Rust translation</b> accepted to CAV 2023.",
  ],
  [
    "2-6 April 2023",
    <div>
      Jess Foster and Celia Li attended{" "}
      <a
        href="https://www.cs.bham.ac.uk/~mhe/events/MGS23/"
        target="_blank"
        rel="noreferrer"
      >
        Midlands Graduate School 2023
      </a>{" "}
      at the University of Birmingham.
    </div>,
  ],
  [
    "March 2023",
    <div>
      Kazutaka Matsuda of Tohoku University visited us to present a talk on
      composable Elm-like Model-View-Update applications and collaborate on
      further "Embedding by Unembedding" research with Sam Frohlich, Jess
      Foster, and Meng Wang.
    </div>,
  ],
  [
    "17th March 2023",
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ImageComponent
          alt={"Sam selfie in Sweden"}
          src={"images/news/sam-sweden-mar-2023.jpg"}
          maxHeight="315px"
        />
      </div>
      <p>
        Sam presented her recent ICFP submission "Reflective Generators", which
        is joint work with Harry Goldstein and Benjamin C. Pierce from the
        University of Pennsylvania, at Chalmers University of Technology in
        Sweden, as part of her week long visit. (
        <a
          href="https://harrisongoldste.in/papers/drafts/icfp-2023-reflective.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Preprint
        </a>
        ;{" "}
        <a
          href="https://docs.google.com/presentation/d/1172giR-MPnYMlZPJomf_UedY15_2gEFSOGQjsRl1DSU/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Slides
        </a>
        )
      </p>
    </div>,
  ],
  [
    "March 2023",
    <div>
      We are recruiting a (senior) research associate in the area of programming
      languages and machine learning:{" "}
      <a
        href="https://www.bristol.ac.uk/jobs/find/details/?jobId=305015"
        target="_blank"
        rel="noreferrer"
      >
        Apply here
      </a>{" "}
      by 19 March
    </div>,
  ],
  [
    "21 Feb 2023",
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ImageComponent
          alt={
            "Sam (left) and Cristina (right) in front of Redmaids' High School"
          }
          src={"images/news/sam-cristina-redmaids.jpg"}
          maxHeight="315px"
        />
      </div>
      <p>
        Sam Frohlich and Cristina David went to Redmaids' High School to give an
        assembly and run a workshop about functional programming and fractals
        using CodeWorld.
      </p>
    </div>,
  ],
  [
    "January 2023",
    <div>
      Alex Kavvos served on the{" "}
      <a
        href="https://lics.siglog.org/lics23/"
        target="_blank"
        rel="noreferrer"
      >
        LICS 2023
      </a>{" "}
      programme committee.
    </div>,
  ],
  [
    "19 Jan 2023",
    "Minh Nguyen presented his PhD work to data scientists at The Alan Turing Institute.",
  ],
  [
    "November 2022",
    "Cristina David has won funding for a 3 year PostDoc from the Royal Society. We will start recruiting soon.",
  ],
  [
    "October 2022",
    "Steven Ramsay is one of the winners of the 2022 WhatsApp Privacy Aware Program Analysis for the proposal Scalable, static taint analysis for Core Erlang",
  ],
  ["October 2022", "Paper from the group accepted at POPL 2023"],
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
