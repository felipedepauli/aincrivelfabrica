import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "All the skills I feel comfortable to work with.",
  progressData: [
    {
      id: 1,
      name: "Python",
      percentage: 80,
    },
    {
      id: 2,
      name: "HTML, CSS and Javascript",
      percentage: 90,
    },
    {
      id: 3,
      name: "Embedded Systems",
      percentage: 50,
    },
    {
      id: 4,
      name: "Machine Learning",
      percentage: 30,
    },
    {
      id: 5,
      name: "Data Science",
      percentage: 40,
    },
    {
      id: 6,
      name: "C and C++",
      percentage: 70,
    },
    {
      id: 7,
      name: "Assembly and VHDL",
      percentage: 60,
    },
    {
      id: 8,
      name: "Backend with Node.js and Mongodb",
      percentage: 60,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
