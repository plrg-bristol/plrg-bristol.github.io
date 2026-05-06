import React from "react";
import { NO_IMG_SRC } from "./variables";

import ImageComponent from "../components/generics/imageComponent";
import HorizontalComponent from "../components/generics/horizontalComponent";

const faculty = [
  {
    name: "Professor Meng Wang (head of group)",
    src: "images/people/meng.jpg",
    link: "https://mengwangoxf.github.io/",
  },
  {
    name: "Dr François Dupressoir",
    src: "images/people/francois.jpg",
    link: "https://fdupress.net/",
  },
  {
    name: "Dr Steven Ramsay",
    src: "images/people/steven.jpg",
    link: "https://sjrsay.github.io/",
  },
  {
    name: "Dr Cristina David",
    src: "images/people/cristina.jpg",
    link: "https://cristina-david.github.io/",
  },
  {
    name: "Dr Alex Kavvos",
    src: "images/people/alex.jpg",
    link: "https://www.lambdabetaeta.eu/",
  },
  {
    name: "Dr Eddie Jones",
    src: "images/people/eddie.png",
    link: "https://ec-jones.github.io/",
  },
  {
    name: "Dr Sam Frohlich",
    src: "images/people/sam.jpg",
    link: "https://samfrohlich.github.io/",
  },
];

const researchAssociates = [
  {
    name: "Arindam Sharma",
    src: "images/people/arindam.jpg",
    link: "https://srg.doc.ic.ac.uk/people/arindam-sharma/",
  },
  {
    name: "Wenjia Ye",
    src: "images/people/wenjia.jpg",
    link: "https://yewenjia.github.io/",
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
    name: "Joe Bond",
    src: "images/people/joe.png",
    link: "https://research-information.bris.ac.uk/en/persons/joseph-e-c-bond",
  },
  {
    name: "Celia Li",
    src: "images/people/celia.jpg",
  },
  {
    name: "Charlie Walpole",
    src: "images/people/charlie.jpg",
  },
  {
    name: "April Tune",
    src: "images/people/april.jpg",
  },
  {
    name: "Henrijs Princis",
    src: "images/people/henrijs.jpg",
  },
  {
    name: "Samson Main",
    src: "images/people/samson.jpg",
    link: "https://mains03.github.io/",
  },
  {
    name: "Amos Holland",
    src: "images/people/amos.jpg",
    link: "https://amosholland.github.io/",
  },
  {
    name: "Weilin He",
    src: "images/people/weilin.jpg",
  },
  {
    name: "Liqiang Shang",
    src: "images/people/liqiang.jpg",
  },
  {
    name: "Piotr Kozicki",
    src: "images/people/piotr.jpg",
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
    name: "Ke Sun",
    src: "images/people/ke.jpg",
  },
  {
    name: "Cameron Low",
    src: "images/people/cameron.jpg",
  },
];

const pastMembers = [
  {
    name: "Yoav Alon",
    src: "images/people/yoav.jpg",
    link: "https://research-information.bris.ac.uk/en/persons/yoav-alon",
  },
  {
    name: "Minh Nguyen",
    src: "images/people/minh.png",
    link: "https://min-nguyen.github.io/",
  },
  {
    name: "Xing Zhang",
    src: "images/people/xingzhang.jpg",
    link: "https://xingzhang-pku.github.io/",
  },
  {
    name: "Jerome Jochems",
    src: "images/people/jerome.jpg",
  },
  {
    name: "Weixin Zhang",
    src: "images/people/weixin.jpg",
    link: "https://wxzh.github.io/",
  },
];

export function createPeople({ isOnHomePage = false } = {}) {
  let sections = [];
  if (isOnHomePage) {
    sections = [[faculty, "Faculty"]];
  } else {
    sections = [
      [faculty, "Faculty"],
      [researchAssociates, "Research Associates"],
      [doctoralTeachingAssociates, "Doctoral Teaching Associates"],
      [students, "Research Students"],
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
