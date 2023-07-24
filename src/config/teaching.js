import React from "react";

const courses = [
  {
    code: "COMS10016",
    name: "Imperative and Functional Programming",
    description: null,
  },
  {
    code: "COMS20007",
    name: "Programming Languages and Computation",
    description: null,
  },
  {
    code: "COMS30040",
    name: "Lambda Calculus and Types",
    description: null,
  },
  {
    code: "COMSM0067",
    name: <>Advanced Topics in Programming Languages</>,
    description: (
      <a href="https://plrg-bristol.github.io/ATiPL/">
        Unit website (2022/23)
      </a>
    ),
  },
];

export const createTeaching = () => {
  return courses.map((courseInfo) => (
    <div>
      <h5>
        {courseInfo.code} - {courseInfo.name}
      </h5>
      <h6>
        <a
          href={`https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?unitCode=${courseInfo.code}`}
        >
          University unit page
        </a>
      </h6>
      <p>{courseInfo.description}</p>
    </div>
  ));
};
