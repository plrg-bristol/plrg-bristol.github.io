import React from "react";
import { NO_IMG_SRC } from "./variables";

import ImageComponent from "../components/generics/imageComponent";
import HorizontalComponent from "../components/generics/horizontalComponent";

const faculty = [
  {
    name: "Meng Wang (head of group)",
    src: "images/people/meng.jpg",
    link: "https://mengwangoxf.github.io/",
  },
  {
    name: "François Dupressoir",
    src: "images/people/francois.jpg",
    link: "https://fdupress.net/",
  },
  {
    name: "Steven Ramsay",
    src: "images/people/steven.jpg",
    link: "https://sjrsay.github.io/",
  },
  {
    name: "Cristina David",
    src: "images/people/cristina.jpg",
    link: "https://cristina-david.github.io/",
  },
  {
    name: "Alex Kavvos",
    src: "images/people/alex.jpg",
    link: "https://www.lambdabetaeta.eu/",
  },
  {
    name: "Eddie Jones",
    src: "images/people/eddie.png",
    link: "https://ec-jones.github.io/",
  },
  {
    name: "Sam Frohlich",
    src: "images/people/sam.jpg",
    link: "https://samfrohlich.github.io/",
  },
];

const seniorResearchAssociate = [
  {
    name: "Minh Nguyen (EPSRC Doctoral Prize Fellow)",
    src: "images/people/minh.png",
    link: "https://min-nguyen.github.io/",
  },
];

const researchAssociates = [
  {
    name: "Joe Bond",
    src: "images/people/joe.png",
    link: "https://research-information.bris.ac.uk/en/persons/joseph-e-c-bond",
  },
];

const doctoralTeachingAssociates = [
  {
    name: "Jessica Foster",
    src: "images/people/jess.jpg",
    link: "https://github.com/ratherforky/",
  },
];

const students = [
  {
    name: "Hanliang Zhang",
    src: "images/people/hanliang.jpg",
  },
  {
    name: "Tom Divers",
    src: "images/people/tom.jpg",
  },
  {
    name: "Yoav Alon",
    src: NO_IMG_SRC,
    link: "https://research-information.bris.ac.uk/en/persons/yoav-alon",
  },
  {
    name: "Celia Li",
    src: NO_IMG_SRC,
  },
  {
    name: "Charlie Walpole",
    src: NO_IMG_SRC,
  },
  {
    name: "April Tune",
    src: NO_IMG_SRC,
  },
];

const partTimeAndVisitors = [
  {
    name: "Roly Perera (Research Fellow)",
    src: "images/people/roly.png",
    link: "http://dynamicaspects.org/research/",
  },
  {
    name: "Kazutaka Matsuda (Honorary Professor)",
    src: "images/people/kazutaka.jpg",
    link: "https://www2.sf.ecei.tohoku.ac.jp/~kztk/",
  },
  {
    name: "Cameron Low",
    src: NO_IMG_SRC,
  },
];

const pastMembers = [
  {
    name: "Weixin Zhang",
    src: "images/people/weixin.jpg",
    link: "https://wxzh.github.io/",
  },
  {
    name: "Jerome Jochems",
    src: "images/people/jerome.jpg",
  },
  {
    name: "Xing Zhang",
    src: "images/people/xingzhang.jpg",
    link: "https://xingzhang-pku.github.io/",
  },
];

export function createPeople({ isOnHomePage = false } = {}) {
  let sections = [];
  if (isOnHomePage) {
    sections = [[faculty, "Faculty"]];
  } else {
    sections = [
      [faculty, "Faculty"],
      [seniorResearchAssociate, "Senior Research Associates"],
      [researchAssociates, "Research Associates"],
      [doctoralTeachingAssociates, "Doctoral Teaching Associates"],
      [students, "PhD Students"],
      [partTimeAndVisitors, "Part Time and Visitors"],
      [pastMembers, "Past Members"],
    ];
  }

  const output = [];
  sections.forEach(([section, sectionName]) => {
    output.push(<h3 className="ms-3">{sectionName}</h3>);
    output.push(
      <div className="text-center">
        <HorizontalComponent
          smColWidth={6} // 2 columns on small screens rather than default 1
          xlColWidth={sectionName === "Faculty" ? 2 : 3} // Allow 6 on a line for faculty, 4 for others
          components={section.map((person) => (
            <ImageComponent
              alt={person.name}
              caption={person.name}
              src={person.src}
              link={person.link}
              maxHeight="200px"
            />
          ))}
        />
      </div>,
    );
  });

  return output;
}
