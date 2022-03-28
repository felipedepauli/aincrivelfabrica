import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2017 - Present",
    degree: "Electronics Engineering - Bachelor’s Degree",
    content:
      "I'm almost there! 2023 will divide a new life for me as an electronics engineer with signal and image processing specialization.",
  },
  {
    id: 2,
    year: "2018 - 2020",
    degree: "UTFPR Internal",
    content:
      "I helped the master and doctor students to develop their works in a linux cluster maintained by me.",
  },
  {
    id: 3,
    year: "2013 - 2020",
    degree: "Entrepreneur at Home Tasty",
    content:
      "I had my own business selling tasty food to great people in a mall int the center of Curitiba.",
  },
  {
    id: 4,
    year: "2006 - 2013",
    degree: "Celepar - Companhia de Informática do Paraná",
    content:
      "I worked as a technician of telecomunications, teaching Linux and other open source services and systems to other technicians.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
