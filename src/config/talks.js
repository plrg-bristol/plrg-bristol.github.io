import React from "react";

import VideoComponent from "../components/generics/videoComponent";
import ListComponent from "../components/generics/listComponent";
import HorizontalComponent from "../components/generics/horizontalComponent";

const talks = [
  // {
  //   title: <a href="TODO: paper link">TODO: title</a>,
  //   authors: <div>TODO: authors</div>,
  //   location: null,
  //   video: <VideoComponent src="TODO: embedded youtube link" />,
  // },
  {
    title: "Consider Collaboration",
    authors: (
      <div>
        <em>Sam Frohlich</em> and <em>Harrison Goldstein</em>
      </div>
    ),
    location: "PLMW@POPL'24",
    video: (
      <VideoComponent src="https://www.youtube.com/embed/Yqvub1h-gZs?si=6n0dCGtJxrg-M1xG&amp;start=23955" />
    ),
  },
  {
    title: (
      <a href="https://doi.org/10.1145/3609026.3609729">
        Effect Handlers for Programmable Inference
      </a>
    ),
    authors: (
      <div>
        <em>Minh Nguyen</em>, Roly Perera, Meng Wang, and Steven Ramsay
      </div>
    ),
    location: "Haskell'23",
    video: (
      <VideoComponent src="https://www.youtube.com/embed/V2vIfgGrr74?si=GN3y6Lle31XIW3ai" />
    ),
  },
  {
    title: (
      <a href="https://doi.org/10.1145/3607842">
        Reflecting on Random Generation
      </a>
    ),
    authors: (
      <div>
        Harrison Goldstein, <em>Sam Frohlich</em>, Meng Wang, and Benjamin C.
        Pierce
      </div>
    ),
    location: "ICFP'23",
    video: (
      <VideoComponent src="https://www.youtube.com/embed/iutt_BKLgDk?si=sQOMJ5OLEyQakPcJ" />
    ),
  },
  {
    title: (
      <a href="https://doi.org/10.1145/3607830">Embedding by Unembedding</a>
    ),
    authors: (
      <div>
        Kazutaka Matsuda, <em>Sam Frohlich</em>, Meng Wang, and Nicolas Wu
      </div>
    ),
    location: "ICFP'23",
    video: <VideoComponent src="https://www.youtube.com/embed/9vtoJrZxa0k" />,
  },
  {
    title: (
      <a href="https://doi.org/10.1145/3547635">
        Modular Probabilistic Models via Algebraic Effects
      </a>
    ),
    authors: (
      <div>
        <em>Minh Nguyen</em>, Roly Perera, Meng Wang, and Nicolas Wu
      </div>
    ),
    location: "ICFP'22",
    video: <VideoComponent src="https://www.youtube.com/embed/xLgqx4DK49k" />,
  },
  {
    title: (
      <a href="https://doi.org/10.5281/zenodo.5668384">
        Linked Visualisations via Galois Dependencies
      </a>
    ),
    authors: (
      <div>
        <em>Roly Perera</em>, Minh Nguyen, Tomas Petricek, and Meng Wang
      </div>
    ),
    location: "POPL'22",
    video: <VideoComponent src="https://www.youtube.com/embed/Ov1HOMKn8t4" />,
  },
  {
    title: (
      <a href="https://doi.org/10.1007/978-3-030-94479-7_6">
        CircuitFlow: A Domain Specific Language for Dataflow Programming
      </a>
    ),
    authors: (
      <div>
        Riley Evans, <em>Sam Frohlich</em>, and Meng Wang
      </div>
    ),
    location: "PADL'22",
    video: <VideoComponent src="https://www.youtube.com/embed/LGaTnxYcdm4" />,
  },
  {
    title: (
      <a href="https://doi.org/10.1145/3498723">
        Staging with Class: a specification for typed template Haskell
      </a>
    ),
    authors: (
      <div>
        <em>Ningning Xie</em>, Matthew Pickering, Andres Löh, Nicolas Wu, Jeremy
        Yallop, and Meng Wang
      </div>
    ),
    location: "POPL'22",
    video: <VideoComponent src="https://www.youtube.com/embed/SUZ-eqprNg0" />,
  },
  {
    title: "Embedded Domain Specific Languages (Trailer)",
    authors: (
      <div>
        <em>Sam Frohlich</em>
      </div>
    ),
    location: "UoB Functional Programming Lectures",
    video: <VideoComponent src="https://www.youtube.com/embed/z8uPHKOTx6s" />,
  },
];

export function createTalks({ limit = null } = {}) {
  let finalTalks = talks;
  if (limit !== null) {
    finalTalks = talks.slice(0, limit);
  }

  // Make the dates bold:
  // finalTalks = finalTalks.map((talksItem) => {
  //   talksItem[0] = <b>{talksItem[0]}</b>;
  //   return talksItem;
  // });

  return [
    <ListComponent
      components={finalTalks.map((talk) => (
        <HorizontalComponent
          components={[
            <ListComponent
              components={[talk.title, talk.authors].concat(
                talk.location ? [talk.location] : [],
              )}
            />,
            talk.video,
          ]}
          centerCols={[0]}
          // colWidthOverrides={[2, 10]}
        />
      ))}
    />,
  ];
}
