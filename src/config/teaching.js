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
      <a href="https://plrg-bristol.github.io/ATiPL/">Unit website</a>
    ),
  },
  {
    code: null,
    name: "Advanced Haskell Seminar Series",
    description: (
      <a href="https://github.com/plrg-bristol/advanced-haskell-2024">
        2024 repo
      </a>
    ),
  },
];

const CourseTitle = ({ courseInfo }) => {
  if (courseInfo.code) {
    return (
      <h5>
        {courseInfo.code} - {courseInfo.name}
      </h5>
    );
  } else {
    return <h5>{courseInfo.name}</h5>;
  }
};

const UnitPage = ({ code }) => {
  return !code ? null : (
    <h6>
      <a
        href={`https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?unitCode=${code}`}
      >
        University unit page
      </a>
    </h6>
  );
};

export const createTeaching = () => {
  return courses.map((courseInfo) => (
    <div>
      <CourseTitle courseInfo={courseInfo} />
      <UnitPage code={courseInfo.code} />
      <p>{courseInfo.description}</p>
    </div>
  ));
};
